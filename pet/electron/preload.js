const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("pet", {
  dragStart: (offset) => ipcRenderer.send("pet:drag-start", offset),
  dragEnd: () => ipcRenderer.send("pet:drag-end"),
  chat: (text, history, model) => ipcRenderer.invoke("pet:chat", { text, history, model }),
  models: () => ipcRenderer.invoke("pet:models"),
  speak: (text, voice) => ipcRenderer.invoke("pet:speak", { text, voice }),
  quit: () => ipcRenderer.send("pet:quit"),
})
