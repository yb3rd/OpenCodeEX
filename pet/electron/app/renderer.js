import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm"

const canvas = document.getElementById("view")
const bubble = document.getElementById("bubble")
const composer = document.getElementById("composer")
const promptInput = document.getElementById("prompt")
const sendButton = document.getElementById("send")
const settings = document.getElementById("settings")
const modeSelect = document.getElementById("mode")
const modelSelect = document.getElementById("model")
const voiceSelect = document.getElementById("voice")
const settingsHint = document.getElementById("settings-hint")
const menu = document.getElementById("menu")

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
renderer.setClearColor(0x000000, 0)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(28, canvas.clientWidth / canvas.clientHeight, 0.1, 20)

scene.add(new THREE.AmbientLight(0xffffff, 1.5))
const keyLight = new THREE.DirectionalLight(0xffffff, 2.2)
keyLight.position.set(1.2, 2.4, 2.2)
scene.add(keyLight)
const rimLight = new THREE.DirectionalLight(0x7aa2ff, 1.1)
rimLight.position.set(-2, 1.2, -1.8)
scene.add(rimLight)

const loader = new GLTFLoader()
loader.register((parser) => new VRMLoaderPlugin(parser))

let vrm
try {
  const gltf = await loader.loadAsync("./sample.vrm")
  vrm = gltf.userData.vrm
  VRMUtils.rotateVRM0(vrm)
  scene.add(vrm.scene)

  const box = new THREE.Box3().setFromObject(vrm.scene)
  const size = box.getSize(new THREE.Vector3())
  const height = size.y || 1.5
  const minY = box.min.y || 0

  camera.position.set(0, minY + height * 0.5, height * 2.1)
  camera.lookAt(0, minY + height * 0.5, 0)

  vrm.scene.traverse((object) => {
    if (object.isMesh) object.frustumCulled = false
  })

  console.log(`VRM loaded: height=${height.toFixed(2)}`)
} catch (error) {
  console.error("VRM load failed", error)
}

const poses = {
  idle: Number.POSITIVE_INFINITY,
  talk: 3,
  wave: 2.2,
  dance: 4.5,
}

let pose = "idle"
let poseStarted = performance.now()
let speaking = false
let lastText = ""
let hiddenAt = 0
let nextBlink = 2
let blinkUntil = 0
let mouthTimer = 0
let mouthIndex = 0
const visemes = ["aa", "ih", "ou", "ee", "oh"]

const restRotations = new Map()
if (vrm) {
  for (const name of ["head", "rightUpperArm", "leftUpperArm"]) {
    const node = vrm.humanoid?.getNormalizedBoneNode(name)
    if (node) restRotations.set(name, node.rotation.clone())
  }
}

function setPose(next) {
  pose = next
  poseStarted = performance.now()
}

function addBoneRotation(name, x, y, z) {
  const node = vrm?.humanoid?.getNormalizedBoneNode(name)
  const rest = restRotations.get(name)
  if (!node || !rest) return
  node.rotation.set(rest.x + x, rest.y + y, rest.z + z)
}

function cleanText(text) {
  return text
    .replace(/```[\s\S]*?```/g, "（代码略）")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s*/gm, "")
    .replace(/[*_>~|]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function showBubble(text) {
  bubble.textContent = text
  bubble.classList.remove("hidden")
  hiddenAt = performance.now() + 20000
}

let voiceOn = localStorage.getItem("pet.voice.v2") !== "0"

let audio = null

async function speak(text, force = false) {
  if (!voiceOn && !force) return
  const voice = localStorage.getItem("pet.voiceName") || "zh-CN-XiaoxiaoNeural"
  if (voice !== "system") {
    const result = await window.pet?.speak(text, voice)
    if (result?.ok && result.audio) {
      try {
        if (audio) {
          audio.pause()
          audio = null
        }
        audio = new Audio(result.audio)
        audio.onplay = () => {
          speaking = true
        }
        audio.onended = () => {
          speaking = false
        }
        audio.onerror = () => {
          speaking = false
        }
        await audio.play()
        return
      } catch {
        speaking = false
      }
    }
  }
  speakSystem(text)
}

function speakSystem(text) {
  if (!("speechSynthesis" in window)) return
  speechSynthesis.cancel()
  speechSynthesis.resume()
  const utterance = new SpeechSynthesisUtterance(text.slice(0, 400))
  utterance.lang = "zh-CN"
  utterance.rate = 1.02
  const voices = speechSynthesis.getVoices()
  const voice = voices.find((item) => item.lang.toLowerCase().startsWith("zh"))
  if (voice) utterance.voice = voice
  utterance.onstart = () => {
    speaking = true
  }
  utterance.onend = () => {
    speaking = false
  }
  utterance.onerror = () => {
    speaking = false
  }
  speechSynthesis.speak(utterance)
}

function toggleVoice() {
  voiceOn = !voiceOn
  localStorage.setItem("pet.voice.v2", voiceOn ? "1" : "0")
  if (!voiceOn) {
    speechSynthesis.cancel()
    audio?.pause()
    speaking = false
  }
  refreshMenu()
}

function testVoice() {
  const text = lastText || "你好，我是 OpenCode 桌面宠物，语音测试正常。"
  showBubble(text)
  setPose("talk")
  speak(text, true)
}

function openComposer() {
  settings.classList.add("hidden")
  menu.classList.add("hidden")
  composer.classList.remove("hidden")
  promptInput.focus()
}

let history = []
try {
  history = JSON.parse(localStorage.getItem("pet.history") || "[]")
  if (!Array.isArray(history)) history = []
} catch {
  history = []
}

function saveHistory() {
  localStorage.setItem("pet.history", JSON.stringify(history.slice(-20)))
}

function currentModel() {
  const value = localStorage.getItem("pet.model") || ""
  const [providerID, id] = value.split("|")
  return providerID && id ? { providerID, id } : undefined
}

async function sendPrompt() {
  const text = promptInput.value.trim()
  if (!text) return
  promptInput.value = ""
  composer.classList.add("hidden")
  showBubble(`你：${text}`)
  const result = await window.pet?.chat(text, history, currentModel())
  if (!result?.ok || !result.text) {
    showBubble(`回复失败：${result?.error || result?.status || "未知错误"}`)
    return
  }
  history.push({ role: "user", content: text })
  history.push({ role: "assistant", content: result.text })
  history = history.slice(-20)
  saveHistory()
  lastText = cleanText(result.text)
  showBubble(lastText)
  setPose("talk")
  speak(lastText)
}

let models = []
const savedMode = localStorage.getItem("pet.mode") || "go"
const savedModel = localStorage.getItem("pet.model") || ""
modeSelect.value = savedMode
voiceSelect.value = localStorage.getItem("pet.voiceName") || "zh-CN-XiaoxiaoNeural"
voiceSelect.addEventListener("change", () => localStorage.setItem("pet.voiceName", voiceSelect.value))

function fillModels() {
  const mode = modeSelect.value
  const list = models.filter((item) =>
    mode === "go" ? item.providerID === "opencode-go" : item.providerID !== "opencode-go",
  )
  modelSelect.innerHTML = ""
  for (const item of list) {
    const option = document.createElement("option")
    option.value = `${item.providerID}|${item.id}`
    option.textContent = `${item.name} (${item.providerID})`
    modelSelect.appendChild(option)
  }
  if (savedModel && list.some((item) => `${item.providerID}|${item.id}` === savedModel)) {
    modelSelect.value = savedModel
  }
  settingsHint.textContent = list.length ? "" : "该来源没有可用模型"
}

async function openSettings() {
  composer.classList.add("hidden")
  menu.classList.add("hidden")
  settings.classList.toggle("hidden")
  if (settings.classList.contains("hidden")) return
  if (!models.length) models = (await window.pet?.models()) || []
  fillModels()
}

function refreshMenu() {
  const muteItem = menu.querySelector('[data-action="mute"]')
  if (muteItem) muteItem.textContent = voiceOn ? "🔇 静音" : "🔊 开启朗读"
}

function closeMenu() {
  menu.classList.add("hidden")
}

window.addEventListener("contextmenu", (event) => {
  if (event.target.closest("input, select, textarea, button, .settings, .composer")) return
  event.preventDefault()
  refreshMenu()
  menu.classList.remove("hidden")
  menu.style.left = `${Math.min(event.clientX, window.innerWidth - 190)}px`
  menu.style.top = `${Math.min(event.clientY, window.innerHeight - 250)}px`
})

window.addEventListener("dblclick", (event) => {
  if (event.target.closest("input, select, textarea, button, .settings")) return
  openComposer()
})

menu.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]")
  if (!button) return
  const action = button.dataset.action
  closeMenu()
  if (action === "compose") openComposer()
  else if (action === "voice") testVoice()
  else if (action === "mute") toggleVoice()
  else if (action === "dance") setPose("dance")
  else if (action === "settings") void openSettings()
  else if (action === "quit") window.pet?.quit()
})

sendButton.addEventListener("click", () => void sendPrompt())
promptInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    void sendPrompt()
  } else if (event.key === "Escape") {
    composer.classList.add("hidden")
  }
})

modeSelect.addEventListener("change", () => {
  localStorage.setItem("pet.mode", modeSelect.value)
  fillModels()
})

modelSelect.addEventListener("change", () => {
  const value = modelSelect.value
  const [providerID, id] = value.split("|")
  if (!providerID || !id) return
  localStorage.setItem("pet.model", value)
  settingsHint.textContent = "已选择模型"
})

let dragging = false

window.addEventListener("mousedown", (event) => {
  if (!menu.classList.contains("hidden") && !menu.contains(event.target)) closeMenu()
  if (
    !settings.classList.contains("hidden") &&
    !settings.contains(event.target) &&
    !menu.contains(event.target)
  ) {
    settings.classList.add("hidden")
  }
  if (event.button !== 0) return
  if (event.target.closest("input, select, textarea, button, .settings, .composer")) return
  dragging = true
  window.pet?.dragStart({ x: event.clientX, y: event.clientY })
  event.preventDefault()
})

window.addEventListener("mouseup", () => {
  if (!dragging) return
  dragging = false
  window.pet?.dragEnd()
})

window.addEventListener("mousedown", () => {
  if ("speechSynthesis" in window) speechSynthesis.resume()
})

const clock = new THREE.Clock()

function animate() {
  const delta = clock.getDelta()
  const time = clock.elapsedTime
  const elapsed = (performance.now() - poseStarted) / 1000

  if (pose !== "idle" && elapsed > poses[pose]) setPose("idle")
  if (hiddenAt && performance.now() > hiddenAt) {
    bubble.classList.add("hidden")
    hiddenAt = 0
  }

  if (vrm) {
    const bob = pose === "dance" ? Math.abs(Math.sin(elapsed * 6.4)) * 0.08 : Math.sin(time * 2) * 0.012
    vrm.scene.position.y = bob
    vrm.scene.rotation.y = 0

    addBoneRotation("head", 0, 0, 0)
    addBoneRotation("rightUpperArm", 0, 0, 1.1)
    addBoneRotation("leftUpperArm", 0, 0, -1.1)

    if (pose === "wave") {
      addBoneRotation("rightUpperArm", 0, 0, -1.5 + Math.sin(elapsed * 9) * 0.25)
    } else if (pose === "dance") {
      vrm.scene.rotation.y = Math.sin(elapsed * 3.2) * 0.5
      addBoneRotation("rightUpperArm", 0, 0, 0.4 + Math.sin(elapsed * 6.4) * 0.7)
      addBoneRotation("leftUpperArm", 0, 0, -0.4 - Math.sin(elapsed * 6.4) * 0.7)
      addBoneRotation("head", 0, Math.sin(elapsed * 3.2) * 0.15, 0)
    } else if (pose === "talk") {
      addBoneRotation("head", Math.sin(elapsed * 6) * 0.05, 0, 0)
      addBoneRotation("rightUpperArm", 0, 0, 0.8 + Math.sin(elapsed * 3) * 0.1)
    }

    if (time > nextBlink) {
      blinkUntil = time + 0.12
      nextBlink = time + 2.5 + Math.random() * 4
    }
    vrm.expressionManager?.setValue("blink", time < blinkUntil ? 1 : 0)

    if (speaking) {
      mouthTimer -= delta
      if (mouthTimer <= 0) {
        mouthIndex = (mouthIndex + 1 + Math.floor(Math.random() * 2)) % visemes.length
        mouthTimer = 0.07 + Math.random() * 0.07
      }
      visemes.forEach((name, index) => {
        vrm.expressionManager?.setValue(name, index === mouthIndex ? 0.55 : 0)
      })
    } else {
      visemes.forEach((name) => vrm.expressionManager?.setValue(name, 0))
    }

    vrm.update(delta)
  }

  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()
