const { app, BrowserWindow, ipcMain, screen } = require("electron")
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

  win = new BrowserWindow({
    width: 400,
    height: 560,
    x: Math.round((area.x + area.width) / scale - 424),
    y: Math.round((area.y + area.height) / scale - 600),
    transparent: true,
    frame: false,
    resizable: true,
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

app.on("window-all-closed", () => app.quit())
