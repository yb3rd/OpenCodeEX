const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("pet", {
  dragStart: (offset) => ipcRenderer.send("pet:drag-start", offset),
  dragEnd: () => ipcRenderer.send("pet:drag-end"),
  wander: () => ipcRenderer.send("pet:wander"),
  onWalk: (callback) => {
    ipcRenderer.on("pet:walk", (_event, data) => callback(data))
  },
  setZones: (zones) => ipcRenderer.send("pet:zones", zones),
  chat: (text, history, model) => ipcRenderer.invoke("pet:chat", { text, history, model }),
  models: () => ipcRenderer.invoke("pet:models"),
  listModels: () => ipcRenderer.invoke("pet:list-models"),
  listAnimations: () => ipcRenderer.invoke("pet:list-animations"),
  fetchTopic: (kind) => ipcRenderer.invoke("pet:topic", kind),
  pickAnimation: () => ipcRenderer.invoke("pet:pick-animation"),
  openModels: () => ipcRenderer.invoke("pet:open-models"),
  speak: (text, voice, options) => ipcRenderer.invoke("pet:speak", { text, voice, ...options }),
  quit: () => ipcRenderer.send("pet:quit"),
})
