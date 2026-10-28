const { app, BrowserWindow, ipcMain, screen } = require("electron")
const { execFile } = require("child_process")
const path = require("path")
const fs = require("fs")
const os = require("os")

let win = null

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

async function apiRequest(method, endpoint, body) {
  const svc = readService()
  if (!svc) throw new Error("OpenCode service not found")
  const headers = {
    authorization: "Basic " + Buffer.from(`opencode:${svc.password}`).toString("base64"),
  }
  if (body) headers["content-type"] = "application/json"
  return fetch(`${svc.url}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })
}

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

ipcMain.handle("pet:chat", async (_event, payload) => {
  const text = String(payload?.text || "").trim()
  if (!text) return { ok: false, error: "empty" }
  const history = Array.isArray(payload?.history) ? payload.history.slice(-12) : []
  const lines = history
    .map((item) => `${item.role === "user" ? "用户" : "助手"}：${item.content}`)
    .join("\n")

  const prompt = [
    "你是桌面宠物助手，用简洁、自然、口语化的中文回答。回答尽量短，适合朗读。",
    lines ? `之前的对话：\n${lines}` : "",
    `用户：${text}`,
  ]
    .filter(Boolean)
    .join("\n\n")

  try {
    const body = { prompt }
    if (payload?.model?.providerID && payload?.model?.id) body.model = payload.model
    const res = await apiRequest("POST", "/api/experimental/generate/text", body)
    if (!res.ok) return { ok: false, status: res.status }
    const json = await res.json()
    return { ok: true, text: json.data?.text || json.text || "" }
  } catch (error) {
    return { ok: false, error: String(error) }
  }
})

ipcMain.handle("pet:speak", async (_event, payload) => {
  const text = String(payload?.text || "").slice(0, 500)
  const voice = String(payload?.voice || "zh-CN-XiaoxiaoNeural")
  const rate = String(payload?.rate || "+0%")
  const pitch = String(payload?.pitch || "+0Hz")
  if (!text || voice === "system") return { ok: false }
  const file = path.join(os.tmpdir(), `opencode-pet-${Date.now()}.mp3`)
  try {
    await new Promise((resolve, reject) => {
      execFile(
        "python",
        [
          "-m",
          "edge_tts",
          "--voice",
          voice,
          "--rate",
          rate,
          "--pitch",
          pitch,
          "--text",
          text,
          "--write-media",
          file,
        ],
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

  setInterval(() => {
    if (!win || win.isDestroyed()) return
    win.setAlwaysOnTop(true, "screen-saver")
    win.moveTop()
  }, 3000)

  win.on("closed", () => (win = null))
}

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

ipcMain.on("pet:quit", () => app.quit())

app.whenReady().then(createWindow)
app.on("window-all-closed", () => app.quit())
