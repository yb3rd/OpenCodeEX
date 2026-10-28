import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm"

const canvas = document.getElementById("view")
const bubble = document.getElementById("bubble")
const composer = document.getElementById("composer")
const promptInput = document.getElementById("prompt")
const sendButton = document.getElementById("send")
const settings = document.getElementById("settings")
const ddMode = document.getElementById("dd-mode")
const ddModel = document.getElementById("dd-model")
const ddVoice = document.getElementById("dd-voice")
const ddRate = document.getElementById("dd-rate")
const ddPitch = document.getElementById("dd-pitch")
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

  camera.position.set(0, minY + height * 0.58, height * 2.4)
  camera.lookAt(0, minY + height * 0.58, 0)

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
  look: 2.6,
  stretch: 2.8,
  bow: 2.0,
  clap: 2.4,
  hips: 2.6,
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
let nextIdle = performance.now() + 5000
let nextWander = performance.now() + 15000
let walking = false
let walkDir = 1
const visemes = ["aa", "ih", "ou", "ee", "oh"]

const restRotations = new Map()
if (vrm) {
  for (const name of ["head", "rightUpperArm", "leftUpperArm", "leftUpperLeg", "rightUpperLeg"]) {
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

let voiceOn = localStorage.getItem("pet.voice.v3") !== "0"

let audio = null

async function speak(text, force = false) {
  if (!voiceOn && !force) return
  const voice = localStorage.getItem("pet.voiceName") || "zh-CN-XiaoxiaoNeural"
  if (voice !== "system") {
    const rate = localStorage.getItem("pet.rate") || "+0%"
    const pitch = localStorage.getItem("pet.pitch") || "+0Hz"
    const result = await window.pet?.speak(text, voice, { rate, pitch })
    if (!result?.ok) console.log(`[speak] failed: ${result?.error ?? "unknown"}`)
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
  localStorage.setItem("pet.voice.v3", voiceOn ? "1" : "0")
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

const modeOptions = [
  { value: "go", label: "OpenCode Go" },
  { value: "api", label: "API" },
]

const voiceOptions = [
  { value: "zh-CN-XiaoxiaoNeural", label: "晓晓 · 温暖（女）" },
  { value: "zh-CN-XiaoyiNeural", label: "晓伊 · 二次元（女）" },
  { value: "zh-CN-YunjianNeural", label: "云健 · 激情（男）" },
  { value: "zh-CN-YunxiNeural", label: "云希 · 阳光（男）" },
  { value: "zh-CN-YunxiaNeural", label: "云夏 · 可爱（男）" },
  { value: "zh-CN-YunyangNeural", label: "云扬 · 专业（男）" },
  { value: "zh-CN-liaoning-XiaobeiNeural", label: "晓北 · 东北话（女）" },
  { value: "zh-CN-shaanxi-XiaoniNeural", label: "晓妮 · 陕西话（女）" },
  { value: "zh-HK-HiuGaaiNeural", label: "曉佳 · 粤语（女）" },
  { value: "zh-HK-HiuMaanNeural", label: "曉曼 · 粤语（女）" },
  { value: "zh-HK-WanLungNeural", label: "雲龍 · 粤语（男）" },
  { value: "zh-TW-HsiaoChenNeural", label: "曉臻 · 台湾（女）" },
  { value: "zh-TW-HsiaoYuNeural", label: "曉雨 · 台湾（女）" },
  { value: "zh-TW-YunJheNeural", label: "雲哲 · 台湾（男）" },
  { value: "system", label: "系统语音（离线）" },
]

const rateOptions = [
  { value: "-20%", label: "慢" },
  { value: "-10%", label: "稍慢" },
  { value: "+0%", label: "正常" },
  { value: "+10%", label: "稍快" },
  { value: "+20%", label: "快" },
]

const pitchOptions = [
  { value: "-5Hz", label: "低" },
  { value: "+0Hz", label: "正常" },
  { value: "+5Hz", label: "高" },
  { value: "+10Hz", label: "很高（偏二次元）" },
]

function closeAllDropdowns(except) {
  document.querySelectorAll(".dd-list").forEach((element) => {
    if (element !== except) element.classList.add("hidden")
  })
}

function createDropdown(root, options, value, onChange) {
  let current = value
  let items = options

  const trigger = document.createElement("button")
  trigger.type = "button"
  trigger.className = "dd-trigger"
  const list = document.createElement("div")
  list.className = "dd-list hidden"

  const render = () => {
    list.innerHTML = ""
    for (const option of items) {
      const button = document.createElement("button")
      button.type = "button"
      button.className = `dd-option${option.value === current ? " active" : ""}`
      button.textContent = option.label
      button.addEventListener("click", (event) => {
        event.stopPropagation()
        current = option.value
        list.classList.add("hidden")
        render()
        onChange?.(current)
      })
      list.appendChild(button)
    }
    const selected = items.find((item) => item.value === current)
    trigger.textContent = selected?.label ?? items[0]?.label ?? ""
  }

  trigger.addEventListener("click", (event) => {
    event.stopPropagation()
    closeAllDropdowns(list)
    const rect = trigger.getBoundingClientRect()
    list.classList.toggle("up", window.innerHeight - rect.bottom < 260)
    list.classList.toggle("hidden")
  })

  root.append(trigger, list)
  render()

  return {
    get value() {
      return current
    },
    setOptions(next) {
      items = next
      if (!next.some((item) => item.value === current)) current = next[0]?.value
      render()
    },
    setValue(next) {
      current = next
      render()
    },
  }
}

const modeDropdown = createDropdown(
  ddMode,
  modeOptions,
  localStorage.getItem("pet.mode") || "go",
  (value) => {
    localStorage.setItem("pet.mode", value)
    fillModels()
  },
)

const modelDropdown = createDropdown(ddModel, [], "", (value) => {
  localStorage.setItem("pet.model", value)
  settingsHint.textContent = "已选择模型"
})

const voiceDropdown = createDropdown(
  ddVoice,
  voiceOptions,
  localStorage.getItem("pet.voiceName") || "zh-CN-XiaoxiaoNeural",
  (value) => {
    localStorage.setItem("pet.voiceName", value)
    voiceOn = true
    localStorage.setItem("pet.voice.v3", "1")
    refreshMenu()
  },
)

const rateDropdown = createDropdown(
  ddRate,
  rateOptions,
  localStorage.getItem("pet.rate") || "+0%",
  (value) => localStorage.setItem("pet.rate", value),
)

const pitchDropdown = createDropdown(
  ddPitch,
  pitchOptions,
  localStorage.getItem("pet.pitch") || "+0Hz",
  (value) => localStorage.setItem("pet.pitch", value),
)

function fillModels() {
  const mode = modeDropdown.value
  const list = models.filter((item) =>
    mode === "go" ? item.providerID === "opencode-go" : item.providerID !== "opencode-go",
  )
  const options = list.map((item) => ({
    value: `${item.providerID}|${item.id}`,
    label: `${item.name} (${item.providerID})`,
  }))
  modelDropdown.setOptions(options)
  const saved = localStorage.getItem("pet.model") || ""
  if (saved && options.some((option) => option.value === saved)) {
    modelDropdown.setValue(saved)
  }
  settingsHint.textContent = options.length ? "" : "该来源没有可用模型"
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
document.getElementById("composer-close").addEventListener("click", () => composer.classList.add("hidden"))

window.pet?.onWalk((data) => {
  walking = Boolean(data?.dir)
  if (data?.dir) walkDir = data.dir
})
promptInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    void sendPrompt()
  } else if (event.key === "Escape") {
    composer.classList.add("hidden")
  }
})

let dragging = false

let lastInteractive = null

function publishZones() {
  const zones = []
  const canvasRect = canvas.getBoundingClientRect()
  zones.push({
    x: canvasRect.left + 55,
    y: canvasRect.top,
    w: canvasRect.width - 110,
    h: canvasRect.height,
  })

  const dragBar = document.querySelector(".drag")
  if (dragBar) {
    const rect = dragBar.getBoundingClientRect()
    zones.push({ x: rect.left + rect.width / 2 - 100, y: rect.top, w: 200, h: rect.height })
  }

  if (!bubble.classList.contains("hidden")) {
    const rect = bubble.getBoundingClientRect()
    zones.push({ x: rect.left, y: rect.top, w: rect.width, h: rect.height })
  }

  for (const element of [composer, menu, settings]) {
    if (!element.classList.contains("hidden")) {
      const rect = element.getBoundingClientRect()
      zones.push({ x: rect.left, y: rect.top, w: rect.width, h: rect.height })
    }
  }

  window.pet?.setZones(zones)
}

setInterval(publishZones, 300)
publishZones()

window.addEventListener("mousedown", (event) => {
  if (!event.target.closest(".dd")) closeAllDropdowns()
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
  if (pose === "idle" && !speaking && performance.now() > nextIdle) {
    const actions = ["wave", "dance", "talk", "look", "stretch", "bow", "clap", "hips"]
    setPose(actions[Math.floor(Math.random() * actions.length)])
    nextIdle = performance.now() + 8000 + Math.random() * 8000
  }
  if (
    !speaking &&
    !dragging &&
    composer.classList.contains("hidden") &&
    settings.classList.contains("hidden") &&
    performance.now() > nextWander
  ) {
    nextWander = performance.now() + 20000 + Math.random() * 20000
    if (Math.random() < 0.6) window.pet?.wander()
  }
  if (hiddenAt && performance.now() > hiddenAt) {
    bubble.classList.add("hidden")
    hiddenAt = 0
  }

  if (vrm) {
    vrm.scene.position.y = 0

    const targetYaw = walking ? walkDir * (Math.PI / 2) : 0
    vrm.scene.rotation.y += (targetYaw - vrm.scene.rotation.y) * Math.min(1, delta * 8)

    if (walking) {
      const phase = time * 8
      addBoneRotation("leftUpperLeg", Math.sin(phase) * 0.45, 0, 0)
      addBoneRotation("rightUpperLeg", -Math.sin(phase) * 0.45, 0, 0)
      addBoneRotation("rightUpperArm", Math.sin(phase) * 0.4, 0, 1.05)
      addBoneRotation("leftUpperArm", -Math.sin(phase) * 0.4, 0, -1.05)
      addBoneRotation("head", 0, 0, 0)
    } else {
      addBoneRotation("leftUpperLeg", 0, 0, 0)
      addBoneRotation("rightUpperLeg", 0, 0, 0)
      addBoneRotation("head", 0, 0, 0)
      addBoneRotation("rightUpperArm", 0, 0, 1.1 + Math.sin(time * 1.6) * 0.03)
      addBoneRotation("leftUpperArm", 0, 0, -1.1 - Math.sin(time * 1.6) * 0.03)

      if (pose === "wave") {
        addBoneRotation("rightUpperArm", 0, 0, -1.5 + Math.sin(elapsed * 9) * 0.25)
      } else if (pose === "dance") {
        addBoneRotation("rightUpperArm", 0, 0, 0.4 + Math.sin(elapsed * 6.4) * 0.7)
        addBoneRotation("leftUpperArm", 0, 0, -0.4 - Math.sin(elapsed * 6.4) * 0.7)
        addBoneRotation("head", 0, Math.sin(elapsed * 3.2) * 0.12, Math.sin(elapsed * 3.2) * 0.06)
      } else if (pose === "talk") {
        addBoneRotation("head", Math.sin(elapsed * 6) * 0.05, 0, 0)
        addBoneRotation("rightUpperArm", 0, 0, 0.8 + Math.sin(elapsed * 3) * 0.1)
      } else if (pose === "look") {
        addBoneRotation("head", 0, Math.sin(elapsed * 2.2) * 0.45, 0)
      } else if (pose === "stretch") {
        addBoneRotation("rightUpperArm", 0, 0, -2.15 + Math.sin(elapsed * 3) * 0.06)
        addBoneRotation("leftUpperArm", 0, 0, 2.15 - Math.sin(elapsed * 3) * 0.06)
        addBoneRotation("head", -0.12, 0, 0)
      } else if (pose === "bow") {
        addBoneRotation("head", 0.42, 0, 0)
        addBoneRotation("rightUpperArm", -0.25, 0, 1.0)
        addBoneRotation("leftUpperArm", -0.25, 0, -1.0)
      } else if (pose === "clap") {
        const beat = Math.abs(Math.sin(elapsed * 6.5))
        addBoneRotation("rightUpperArm", -0.55, 0, 0.42 + beat * 0.18)
        addBoneRotation("leftUpperArm", -0.55, 0, -0.42 - beat * 0.18)
        addBoneRotation("head", 0, 0, Math.sin(elapsed * 3) * 0.04)
      } else if (pose === "hips") {
        addBoneRotation("rightUpperArm", 0, 0, 1.6 + Math.sin(elapsed * 3) * 0.05)
        addBoneRotation("leftUpperArm", 0, 0, -1.6 - Math.sin(elapsed * 3) * 0.05)
        addBoneRotation("head", 0, Math.sin(elapsed * 2.5) * 0.18, 0)
      }
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
