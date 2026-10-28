const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("pet", {
  onMessage: (callback) => {
    ipcRenderer.on("pet:message", (_event, message) => callback(message))
  },
  dragStart: (offset) => ipcRenderer.send("pet:drag-start", offset),
  dragEnd: () => ipcRenderer.send("pet:drag-end"),
  prompt: (text) => ipcRenderer.invoke("pet:prompt", text),
  models: () => ipcRenderer.invoke("pet:models"),
  setModel: (model) => ipcRenderer.invoke("pet:set-model", model),
  speak: (text, voice) => ipcRenderer.invoke("pet:speak", { text, voice }),
  quit: () => ipcRenderer.send("pet:quit"),
})
