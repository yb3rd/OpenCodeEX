const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("pet", {
  dragStart: (offset) => ipcRenderer.send("pet:drag-start", offset),
  dragEnd: () => ipcRenderer.send("pet:drag-end"),
  chat: (text, history, model) => ipcRenderer.invoke("pet:chat", { text, history, model }),
  models: () => ipcRenderer.invoke("pet:models"),
  speak: (text, voice, options) => ipcRenderer.invoke("pet:speak", { text, voice, ...options }),
  quit: () => ipcRenderer.send("pet:quit"),
})
