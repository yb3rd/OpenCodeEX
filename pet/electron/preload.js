const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("pet", {
  onMessage: (callback) => {
    ipcRenderer.on("pet:message", (_event, message) => callback(message))
  },
  quit: () => ipcRenderer.send("pet:quit"),
})
