const { app, BrowserWindow, ipcMain, screen } = require("electron")
const { execFile } = require("child_process")
const path = require("path")
const fs = require("fs")
const os = require("os")

let win = null
let lastMessageId = null
let polling = false

function readService() {
  try {
    const file = path.join(os.homedir(), ".local", "state", "opencode", "service.json")
    const json = JSON.parse(fs.readFileSync(file, "utf8"))
    if (!json.url || !json.password) return null
    return { url: json.url, password: json.password }
  } catch {
    return null
  }
}

async function latestAssistant() {
  const svc = readService()
  if (!svc) return null
  const headers = {
    authorization: "Basic " + Buffer.from(`opencode:${svc.password}`).toString("base64"),
  }
  const sessionsRes = await fetch(`${svc.url}/api/session?limit=5&order=desc&archived=false`, { headers })
  if (!sessionsRes.ok) return null
  const sessions = await sessionsRes.json()
  for (const session of sessions.data || []) {
    const ctxRes = await fetch(`${svc.url}/api/session/${session.id}/context`, { headers })
    if (!ctxRes.ok) continue
    const ctx = await ctxRes.json()
    const messages = ctx.data || []
    for (let i = messages.length - 1; i >= 0; i--) {
      const message = messages[i]
      if (message.type !== "assistant" || !Array.isArray(message.content)) continue
      const text = message.content
        .filter((part) => part.type === "text")
        .map((part) => part.text || "")
        .join("\n")
        .trim()
      if (text) return { id: message.id, text }
    }
  }
  return null
}

async function poll() {
  if (polling) return
  polling = true
  try {
    const latest = await latestAssistant()
    if (latest) {
      if (lastMessageId === null) {
        lastMessageId = latest.id
      } else if (latest.id !== lastMessageId) {
        lastMessageId = latest.id
        win?.webContents.send("pet:message", { text: latest.text })
      }
    }
  } catch {
    // service restarting; retry next tick
  } finally {
    polling = false
  }
}

function createWindow() {
  const display = screen.getPrimaryDisplay()
  const scale = display.scaleFactor || 1
  const area = display.workArea
  const width = 400
  const height = 560
  const x = Math.round((area.x + area.width) / scale - 424)
  const y = Math.round((area.y + area.height) / scale - 600)

  win = new BrowserWindow({
    width,
    height,
    x,
    y,
    transparent: true,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    hasShadow: false,
    backgroundColor: "#00000000",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  win.setAlwaysOnTop(true, "screen-saver")
  win.setBounds({ x, y, width, height })
  win.loadFile(path.join(__dirname, "dist", "index.html"))

  win.webContents.on("console-message", (_event, _level, message) => {
    try {
      fs.appendFileSync(path.join(__dirname, "pet.log"), `${message}\n`)
    } catch {}
  })

  win.once("ready-to-show", () => {
    win.show()
    win.moveTop()
  })

  // Keep above other windows
  setInterval(() => {
    if (!win || win.isDestroyed()) return
    win.setAlwaysOnTop(true, "screen-saver")
    win.moveTop()
  }, 3000)

  win.on("closed", () => (win = null))
}

app.whenReady().then(() => {
  createWindow()
  setInterval(poll, 3000)
  poll()
})

ipcMain.on("pet:quit", () => app.quit())

let dragTimer = null
let dragOffset = { x: 0, y: 0 }

ipcMain.on("pet:drag-start", (_event, offset) => {
  if (!offset || typeof offset.x !== "number" || typeof offset.y !== "number") return
  dragOffset = offset
  if (dragTimer) clearInterval(dragTimer)
  dragTimer = setInterval(() => {
    if (!win || win.isDestroyed()) return
    const point = screen.getCursorScreenPoint()
    win.setPosition(Math.round(point.x - dragOffset.x), Math.round(point.y - dragOffset.y))
  }, 16)
})

ipcMain.on("pet:drag-end", () => {
  if (dragTimer) clearInterval(dragTimer)
  dragTimer = null
})

async function apiRequest(method, path, body) {
  const svc = readService()
  if (!svc) throw new Error("OpenCode service not found")
  const headers = {
    authorization: "Basic " + Buffer.from(`opencode:${svc.password}`).toString("base64"),
  }
  if (body) headers["content-type"] = "application/json"
  return fetch(`${svc.url}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })
}

async function latestSessionId() {
  const res = await apiRequest("GET", "/api/session?limit=1&order=desc&archived=false")
  if (!res.ok) return null
  const json = await res.json()
  return json.data?.[0]?.id ?? null
}

ipcMain.handle("pet:prompt", async (_event, text) => {
  try {
    if (!text || !text.trim()) return { ok: false, error: "empty" }
    const sessionID = await latestSessionId()
    if (!sessionID) return { ok: false, error: "no session" }
    const res = await apiRequest("POST", `/api/session/${sessionID}/prompt`, { text })
    return { ok: res.ok, status: res.status }
  } catch (error) {
    return { ok: false, error: String(error) }
  }
})

ipcMain.handle("pet:models", async () => {
  try {
    const res = await apiRequest("GET", "/api/model")
    if (!res.ok) return []
    const json = await res.json()
    return (json.data || []).map((model) => ({
      providerID: model.providerID,
      id: model.modelID || model.id,
      name: model.name || model.modelID || model.id,
    }))
  } catch {
    return []
  }
})

ipcMain.handle("pet:set-model", async (_event, model) => {
  try {
    if (!model?.providerID || !model?.id) return { ok: false }
    const sessionID = await latestSessionId()
    if (!sessionID) return { ok: false, error: "no session" }
    const res = await apiRequest("POST", `/api/session/${sessionID}/model`, { model })
    return { ok: res.ok, status: res.status }
  } catch (error) {
    return { ok: false, error: String(error) }
  }
})

ipcMain.handle("pet:speak", async (_event, payload) => {
  const text = String(payload?.text || "").slice(0, 500)
  const voice = String(payload?.voice || "zh-CN-XiaoxiaoNeural")
  if (!text || voice === "system") return { ok: false }
  const file = path.join(os.tmpdir(), `opencode-pet-${Date.now()}.mp3`)
  try {
    await new Promise((resolve, reject) => {
      execFile(
        "python",
        ["-m", "edge_tts", "--voice", voice, "--text", text, "--write-media", file],
        { timeout: 25000 },
        (error) => (error ? reject(error) : resolve()),
      )
    })
    const buffer = fs.readFileSync(file)
    return { ok: true, audio: `data:audio/mpeg;base64,${buffer.toString("base64")}` }
  } catch (error) {
    return { ok: false, error: String(error) }
  } finally {
    try {
      fs.unlinkSync(file)
    } catch {}
  }
})

app.on("window-all-closed", () => app.quit())


