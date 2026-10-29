const { app, BrowserWindow, ipcMain, screen, shell, dialog } = require("electron")
const { execFile } = require("child_process")
const path = require("path")
const fs = require("fs")
const os = require("os")

let win = null
let zones = []
let dragTimer = null
let dragOffset = { x: 0, y: 0 }
let wanderTimer = null

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

async function fetchText(url, timeout = 15000) {
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" },
    signal: AbortSignal.timeout(timeout),
  })
  if (!res.ok) throw new Error(String(res.status))
  return res.text()
}

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function parseRssTitles(xml, limit) {
  return [...xml.matchAll(/<item>[\s\S]*?<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/g)]
    .map((match) => decodeEntities(match[1]).trim())
    .filter(Boolean)
    .slice(0, limit)
}

ipcMain.handle("pet:topic", async (_event, kind) => {
  try {
    if (kind === "weather") {
      const text = await fetchText("https://wttr.in/?format=3")
      return { ok: true, text: text.trim() }
    }
    if (kind === "ai-news") {
      const res = await fetch("https://hn.algolia.com/api/v1/search?query=AI&tags=story&hitsPerPage=12", {
        signal: AbortSignal.timeout(15000),
      })
      const json = await res.json()
      const items = (json.hits || [])
        .map((hit) => hit.title)
        .filter((title) => typeof title === "string" && title.trim() && !/comments|HN is for/i.test(title))
        .slice(0, 3)
      return { ok: true, items }
    }
    if (kind === "anime-news" || kind === "game-news") {
      const rid = kind === "game-news" ? 4 : 1
      const res = await fetch(`https://api.bilibili.com/x/web-interface/ranking/v2?rid=${rid}&type=all`, {
        headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          referer: "https://www.bilibili.com",
        },
        signal: AbortSignal.timeout(15000),
      })
      if (!res.ok) throw new Error(String(res.status))
      const json = await res.json()
      const items = (json.data?.list || [])
        .map((item) => item.title)
        .filter((title) => typeof title === "string" && title.trim())
        .slice(0, 4)
      if (!items.length) throw new Error("empty")
      return { ok: true, items }
    }
    if (kind === "acg-news") {
      const xml = await fetchText("https://www.gcores.com/rss")
      const items = parseRssTitles(xml, 4)
      if (!items.length) throw new Error("empty")
      return { ok: true, items }
    }
    if (kind === "world-news") {
      const res = await fetch("https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=8", {
        signal: AbortSignal.timeout(15000),
      })
      const json = await res.json()
      const items = (json.hits || []).map((hit) => hit.title).filter(Boolean).slice(0, 4)
      return { ok: true, items }
    }
    return { ok: false }
  } catch (error) {
    return { ok: false, error: String(error) }
  }
})
ipcMain.handle("pet:models", async () => {  try {
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
    "你是桌面宠物助手，用简洁、自然、口语化的中文回答。尽量一句话说完，不超过50个字，适合朗读。",
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

ipcMain.handle("pet:list-models", async () => {
  const dir = path.join(__dirname, "models")
  const list = []
  try {
    fs.mkdirSync(dir, { recursive: true })
    for (const file of fs.readdirSync(dir)) {
      if (/\.vrm$/i.test(file)) {
        list.push({
          name: file.replace(/\.vrm$/i, ""),
          url: "file://" + path.join(dir, file).replace(/\\/g, "/"),
        })
      }
    }
  } catch {}
  return list
})

ipcMain.handle("pet:list-animations", async () => {
  const dir = path.join(__dirname, "animations")
  const list = []
  try {
    fs.mkdirSync(dir, { recursive: true })
    for (const file of fs.readdirSync(dir)) {
      if (/\.vrma$/i.test(file)) {
        list.push({
          name: file.replace(/\.vrma$/i, ""),
          url: "file://" + path.join(dir, file).replace(/\\/g, "/"),
        })
      }
    }
  } catch {}
  return list
})

ipcMain.handle("pet:pick-animation", async () => {
  try {
    const result = await dialog.showOpenDialog(win, {
      title: "选择 VRMA 动作文件",
      filters: [{ name: "VRM Animation", extensions: ["vrma"] }],
      properties: ["openFile"],
    })
    if (result.canceled || !result.filePaths[0]) return null
    const source = result.filePaths[0]
    const dir = path.join(__dirname, "animations")
    fs.mkdirSync(dir, { recursive: true })
    const dest = path.join(dir, path.basename(source))
    fs.copyFileSync(source, dest)
    return { name: path.basename(source, ".vrma"), url: "file://" + dest.replace(/\\/g, "/") }
  } catch (error) {
    return null
  }
})

ipcMain.handle("pet:open-models", async () => {
  const dir = path.join(__dirname, "models")
  try {
    fs.mkdirSync(dir, { recursive: true })
    await shell.openPath(dir)
    return { ok: true }
  } catch (error) {
    return { ok: false, error: String(error) }
  }
})

ipcMain.handle("pet:speak", async (_event, payload) => {
  const text = String(payload?.text || "").slice(0, 500)
  const voice = String(payload?.voice || "zh-CN-XiaoyiNeural")
  const rate = String(payload?.rate || "+0%")
  const pitch = String(payload?.pitch || "+0Hz")
  if (!text || voice === "system") return { ok: false }
  const file = path.join(os.tmpdir(), `opencode-pet-${Date.now()}.mp3`)
  try {
    await new Promise((resolve, reject) => {
      execFile(
        "python",
        ["-m", "edge_tts", "--voice", voice, "--rate", rate, "--pitch", pitch, "--text", text, "--write-media", file],
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

ipcMain.on("pet:zones", (_event, next) => {
  zones = Array.isArray(next) ? next : []
  if (!win || win.isDestroyed()) return
  const rects = zones
    .map((zone) => ({
      x: Math.round(zone.x),
      y: Math.round(zone.y),
      width: Math.max(1, Math.round(zone.w)),
      height: Math.max(1, Math.round(zone.h)),
    }))
    .filter((rect) => rect.width > 1 && rect.height > 1)
  try {
    win.setShape(rects.length ? rects : [{ x: 0, y: 0, width: 2, height: 2 }])
  } catch {}
})

ipcMain.on("pet:drag-start", () => {
  const scale = screen.getPrimaryDisplay().scaleFactor || 1
  let last = screen.getCursorScreenPoint()
  last = { x: last.x / scale, y: last.y / scale }
  if (dragTimer) clearInterval(dragTimer)
  dragTimer = setInterval(() => {
    if (!win || win.isDestroyed()) return
    const point = screen.getCursorScreenPoint()
    const current = { x: point.x / scale, y: point.y / scale }
    const [wx, wy] = win.getPosition()
    win.setPosition(
      Math.round(wx + current.x - last.x),
      Math.round(wy + current.y - last.y),
    )
    last = current
  }, 16)
})

ipcMain.on("pet:drag-end", () => {
  if (dragTimer) clearInterval(dragTimer)
  dragTimer = null
})

ipcMain.on("pet:wander", () => {
  if (!win || win.isDestroyed() || wanderTimer) return
  const display = screen.getPrimaryDisplay()
  const scale = display.scaleFactor || 1
  const area = display.workArea
  const [x, y] = win.getPosition()
  const [width] = win.getSize()

  const maxX = Math.round((area.x + area.width) / scale - width - 16)
  const minX = 16
  let targetX = x + (Math.random() < 0.5 ? -1 : 1) * Math.round(120 + Math.random() * 200)
  targetX = Math.max(minX, Math.min(maxX, targetX))
  if (Math.abs(targetX - x) < 40) {
    targetX = x < (minX + maxX) / 2 ? maxX : minX
  }
  const dir = targetX > x ? 1 : -1

  win.webContents.send("pet:walk", { dir })

  const steps = 45
  let step = 0
  wanderTimer = setInterval(() => {
    if (!win || win.isDestroyed()) {
      clearInterval(wanderTimer)
      wanderTimer = null
      return
    }
    step += 1
    const t = step / steps
    const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
    win.setPosition(Math.round(x + (targetX - x) * ease), y)
    if (step >= steps) {
      clearInterval(wanderTimer)
      wanderTimer = null
      win.webContents.send("pet:walk", { dir: 0 })
    }
  }, 30)
})

ipcMain.on("pet:quit", () => app.quit())

function startHitTest() {
  let lastInside = null
  setInterval(() => {
    if (!win || win.isDestroyed()) return
    const bounds = win.getBounds()
    const scale = screen.getPrimaryDisplay().scaleFactor || 1
    const point = screen.getCursorScreenPoint()
    const x = point.x / scale - bounds.x
    const y = point.y / scale - bounds.y
    const inside = zones.some(
      (zone) => x >= zone.x && x <= zone.x + zone.w && y >= zone.y && y <= zone.y + zone.h,
    )
    if (inside !== lastInside) {
      lastInside = inside
      try { fs.appendFileSync(path.join(__dirname, "pet.log"), `[hit] ${inside}\n`) } catch {}
      if (inside) win.setIgnoreMouseEvents(false)
      else win.setIgnoreMouseEvents(true, { forward: true })
    }
  }, 60)
}

function createWindow() {
  const display = screen.getPrimaryDisplay()
  const scale = display.scaleFactor || 1
  const area = display.workArea
  const width = 300
  const height = 340
  const x = Math.round((area.x + area.width) / scale - 324)
  const y = Math.round((area.y + area.height) / scale - 400)

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
  win.setIgnoreMouseEvents(false)
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
  // startHitTest()
}

app.whenReady().then(createWindow)
app.on("window-all-closed", () => app.quit())

