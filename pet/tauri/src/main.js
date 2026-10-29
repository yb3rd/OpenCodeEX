import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm"
import { VRMAnimationLoaderPlugin, createVRMAnimationClip } from "@pixiv/three-vrm-animation"
import { invoke, convertFileSrc } from "@tauri-apps/api/core"
import { getCurrentWindow } from "@tauri-apps/api/window"

const appWindow = getCurrentWindow()

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
const menuModelList = document.getElementById("model-list")
const menuAnimList = document.getElementById("anim-list")

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
loader.register((parser) => new VRMAnimationLoaderPlugin(parser))

let vrm = null
let mixer = null
let armSign = 1
let baseYaw = 0
const restRotations = new Map()

async function loadModel(url) {
  const gltf = await loader.loadAsync(url)
  const next = gltf.userData.vrm
  if (!next) throw new Error("VRM not found")

  if (mixer) {
    mixer.stopAllAction()
    mixer = null
  }
  if (vrm) {
    scene.remove(vrm.scene)
    try {
      VRMUtils.deepDispose(vrm.scene)
    } catch {}
    vrm = null
  }
  restRotations.clear()

  vrm = next
  VRMUtils.rotateVRM0(vrm)
  armSign = vrm.meta?.metaVersion === "0" ? -1 : 1
  baseYaw = armSign < 0 ? Math.PI : 0
  vrm.scene.rotation.y = baseYaw
  scene.add(vrm.scene)
  console.log(`VRM meta=${vrm.meta?.metaVersion ?? "?"} armSign=${armSign} bones=${vrm.humanoid ? "yes" : "no"}`)

  const box = new THREE.Box3().setFromObject(vrm.scene)
  const size = box.getSize(new THREE.Vector3())
  const height = size.y || 1.5
  const minY = box.min.y || 0

  camera.position.set(0, minY + height * 0.58, height * 2.4)
  camera.lookAt(0, minY + height * 0.58, 0)
  camera.updateProjectionMatrix()

  vrm.scene.traverse((object) => {
    if (object.isMesh) object.frustumCulled = false
  })

  for (const name of ["head", "rightUpperArm", "leftUpperArm", "rightLowerArm", "leftLowerArm", "leftUpperLeg", "rightUpperLeg"]) {
    const node = vrm.humanoid?.getNormalizedBoneNode(name)
    if (node) restRotations.set(name, node.rotation.clone())
  }

  console.log(`VRM loaded: ${url}`)
}

async function playAnimation(url) {
  if (mixer) {
    mixer.stopAllAction()
    try {
      mixer.uncacheRoot(vrm.scene)
    } catch {}
    mixer = null
  }
  if (!url || !vrm) return
  const gltf = await loader.loadAsync(url)
  const animations = gltf.userData.vrmAnimations
  if (!animations?.length) return
  const clip = createVRMAnimationClip(animations[0], vrm)
  mixer = new THREE.AnimationMixer(vrm.scene)
  mixer.clipAction(clip).play()
}

const savedModelUrl = localStorage.getItem("pet.modelUrl") || "./sample.vrm"
try {
  await loadModel(savedModelUrl)
} catch (error) {
  console.error("VRM load failed", error)
  if (savedModelUrl !== "./sample.vrm") {
    await loadModel("./sample.vrm").catch(() => {})
  }
}

let nextTalk = performance.now() + 90000
let nextAnim = performance.now() + 25000
let animationUrls = []

let speaking = false
let lastText = ""
let hiddenAt = 0
let nextBlink = 2
let blinkUntil = 0
let mouthTimer = 0
let mouthIndex = 0
const visemes = ["aa", "ih", "ou", "ee", "oh"]


function addBoneRotation(name, x, y, z) {
  const node = vrm?.humanoid?.getNormalizedBoneNode(name)
  const rest = restRotations.get(name)
  if (!node || !rest) return
  const flip = name === "rightUpperArm" || name === "leftUpperArm" ? armSign : 1
  node.rotation.set(rest.x + x, rest.y + y, rest.z + z * flip)
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
    const result = await invoke("speak", { text, voice, rate, pitch })
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
  speak(text, true)
}

async function speakNext() {
  if (audio) {
    audio.pause()
    audio = null
  }
  if ("speechSynthesis" in window) speechSynthesis.cancel()
  speaking = false
  showBubble("让我想想下一条…")
  await autonomousTalk(true)
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

async function autonomousTalk(manual = false) {
  if (!manual && (speaking || !composer.classList.contains("hidden") || !settings.classList.contains("hidden"))) return
  const kinds = ["greeting", "eaten", "weather", "ai-news", "world-news", "anime-news", "game-news", "acg-news"]
  const kind = kinds[Math.floor(Math.random() * kinds.length)]
  let prompt
  if (kind === "greeting") {
    prompt = "用一句自然、亲切的中文向用户打招呼，像桌面宠物一样，不要超过20个字。"
  } else if (kind === "eaten") {
    prompt = "用一句自然的中文问用户吃饭了没有，关心但不要啰嗦，不要超过20个字。"
  } else {
    const topic = await invoke("topic", { kind })
    if (!topic?.ok) {
      const fallbacks = {
        weather: "用一句中文问候用户，并提醒注意天气。",
        "anime-news": "用一句中文和用户聊聊最近的新番动画。",
        "game-news": "用一句中文和用户聊聊最近在玩的游戏。",
        "acg-news": "用一句中文和用户聊聊最近的二次元话题。",
      }
      prompt = fallbacks[kind] || "用一句中文和用户聊聊最近的新鲜事。"
    } else if (kind === "weather") {
      prompt = `根据这条天气信息，用一两句自然的口语中文播报天气，并给一句简短提醒：${topic.text}`
    } else {
      const labels = {
        "ai-news": "AI 新闻",
        "world-news": "国际新闻",
        "anime-news": "二次元新闻",
        "game-news": "游戏新闻",
        "acg-news": "ACG 新闻",
      }
      prompt = `根据这些标题，用一两句自然的口语中文播报${labels[kind] || "新闻"}，不要逐条念：${topic.items.join("；")}`
    }
  }
  const result = await invoke("chat", { text: prompt, history: [], model: currentModel() })
  if (result?.ok && result.text) {
    lastText = cleanText(result.text)
    showBubble(lastText)
    speak(lastText)
  } else if (manual) {
    lastText = "我现在还没想好说什么，稍后再聊吧。"
    showBubble(lastText)
    speak(lastText, true)
  }
}

async function sendPrompt() {
  const text = promptInput.value.trim()
  if (!text) return
  promptInput.value = ""
  composer.classList.add("hidden")
  showBubble(`你：${text}`)
  const result = await invoke("chat", { text, history, model: currentModel() })
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
  speak(lastText)
}

let models = []

async function ensureDefaultModel() {
  if (localStorage.getItem("pet.model")) return
  const list = (await invoke("list_models")) || []
  if (!list.length) return
  const go = list.filter((item) => item.providerID === "opencode-go")
  const pick = go.find((item) => /flash/i.test(item.id)) || go[0] || list[0]
  if (pick) localStorage.setItem("pet.model", `${pick.providerID}|${pick.id}`)
}

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
    const below = window.innerHeight - rect.bottom - 8
    const above = rect.top - 8
    const openUp = below < Math.min(220, above)
    list.classList.toggle("up", openUp)
    list.style.maxHeight = `${Math.max(80, Math.min(220, openUp ? above : below))}px`
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

let modelFiles = []

function renderModelMenu() {
  if (!menuModelList) return
  menuModelList.innerHTML = ""
  const current = localStorage.getItem("pet.modelUrl") || "./sample.vrm"
  const items = [{ name: "默认示例", url: "./sample.vrm" }, ...modelFiles]
  for (const item of items) {
    const button = document.createElement("button")
    button.type = "button"
    button.textContent = (item.url === current ? "✓ " : "") + item.name
    if (item.url === current) button.classList.add("active")
    button.addEventListener("click", (event) => {
      event.stopPropagation()
      closeMenu()
      void switchModel(item.url, item.name)
    })
    menuModelList.append(button)
  }
}

async function switchModel(url, name) {
  localStorage.setItem("pet.modelUrl", url)
  showBubble(`正在切换到 ${name}…`)
  try {
    await loadModel(url)
    showBubble(`已切换到 ${name}`)
  } catch {
    showBubble("模型加载失败")
  }
}

async function loadModelFiles() {
  const list = (await invoke("list_model_files")) || []
  modelFiles = list.map((item) => ({ name: item.name, url: convertFileSrc(item.path) }))
  renderModelMenu()
}

let animationFiles = []

function renderAnimMenu() {
  if (!menuAnimList) return
  menuAnimList.innerHTML = ""
  const items = [{ name: "无（自然站立）", url: "" }, ...animationFiles]
  for (const item of items) {
    const button = document.createElement("button")
    button.type = "button"
    button.textContent = item.name
    button.addEventListener("click", (event) => {
      event.stopPropagation()
      closeMenu()
      void playAnimation(item.url)
      showBubble(item.url ? `动作：${item.name}` : "已恢复自然站立")
    })
    menuAnimList.append(button)
  }
}

async function loadAnimationList() {
  const list = (await invoke("list_animations")) || []
  const priority = ["idle-maid", "idle-sitting", "FancyDressParty", "Reading (Loop)", "grabbed"]
  animationFiles = list
    .map((item) => ({ name: item.name, url: convertFileSrc(item.path) }))
    .sort((a, b) => {
      const ai = priority.indexOf(a.name)
      const bi = priority.indexOf(b.name)
      return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi) || a.name.localeCompare(b.name)
    })
  animationUrls = list
    .filter((item) => !/^(grabbed|[a-e])$/i.test(item.name))
    .map((item) => convertFileSrc(item.path))
  renderAnimMenu()
}

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
  if (!models.length) models = (await invoke("list_models")) || []
  fillModels()
  void loadAnimationList()
}

function refreshMenu() {
  const muteItem = menu.querySelector('[data-action="mute"]')
  if (muteItem) muteItem.textContent = voiceOn ? "🔇 静音" : "🔊 开启朗读"
}

function closeMenu() {
  menu.classList.add("hidden")
}

window.addEventListener("contextmenu", (event) => {
  if (event.target.closest("input, select, textarea, button, .settings, .composer, .context-menu")) return
  event.preventDefault()
  refreshMenu()
  renderModelMenu()
  renderAnimMenu()
  menuModelList?.classList.add("hidden")
  menuAnimList?.classList.add("hidden")
  menu.classList.remove("hidden")
  const width = menu.offsetWidth
  const height = menu.offsetHeight
  menu.style.left = `${Math.max(6, Math.min(event.clientX, window.innerWidth - width - 6))}px`
  menu.style.top = `${Math.max(6, Math.min(event.clientY, window.innerHeight - height - 6))}px`
})

window.addEventListener("dblclick", (event) => {
  if (event.target.closest("input, select, textarea, button, .settings, .context-menu")) return
  openComposer()
})

menu.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]")
  if (!button) return
  const action = button.dataset.action
  if (action === "switchModel" || action === "switchAnim") {
    if (action === "switchModel") {
      renderModelMenu()
      menuAnimList?.classList.add("hidden")
      menuModelList?.classList.toggle("hidden")
    } else {
      renderAnimMenu()
      menuModelList?.classList.add("hidden")
      menuAnimList?.classList.toggle("hidden")
    }
    if (!menuModelList?.classList.contains("hidden") || !menuAnimList?.classList.contains("hidden")) {
      menu.scrollTop = Math.max(0, button.offsetTop - 30)
    }
    const rect = menu.getBoundingClientRect()
    const overflow = rect.bottom - window.innerHeight + 6
    if (overflow > 0) menu.style.top = `${Math.max(6, rect.top - overflow)}px`
    return
  }
  closeMenu()
  if (action === "compose") openComposer()
  else if (action === "voice") testVoice()
  else if (action === "voiceNext") void speakNext()
  else if (action === "mute") toggleVoice()
  else if (action === "settings") void openSettings()
  else if (action === "models") void invoke("open_models")
  else if (action === "importAnim") {
    void (async () => {
      const picked = await invoke("pick_animation")
      if (!picked) return
      await playAnimation(convertFileSrc(picked.path))
      await loadAnimationList()
      showBubble(`已导入动作：${picked.name}`)
    })()
  }
  else if (action === "quit") appWindow.close()
})

sendButton.addEventListener("click", () => void sendPrompt())
document.getElementById("composer-close").addEventListener("click", () => composer.classList.add("hidden"))

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
    x: canvasRect.left + 20,
    y: canvasRect.top,
    w: canvasRect.width - 40,
    h: canvasRect.height,
  })

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

  for (const element of document.querySelectorAll(".dd-list:not(.hidden)")) {
    const rect = element.getBoundingClientRect()
    if (rect.width > 0 && rect.height > 0) {
      zones.push({ x: rect.left, y: rect.top, w: rect.width, h: rect.height })
    }
  }

  void invoke("set_zones", { zones })
}

setInterval(publishZones, 120)
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
  if (event.target.closest("input, select, textarea, button, .settings, .composer, .context-menu")) return
  dragging = true
  void appWindow.startDragging()
  event.preventDefault()
})

window.addEventListener("mouseup", () => {
  dragging = false
})

window.addEventListener("mousedown", () => {
  if ("speechSynthesis" in window) speechSynthesis.resume()
})

const clock = new THREE.Clock()

function animate() {
  const delta = clock.getDelta()
  const time = clock.elapsedTime

  if (!speaking && performance.now() > nextTalk) {
    nextTalk = performance.now() + 180000 + Math.random() * 240000
    void autonomousTalk()
  }
  if (!mixer && !speaking && animationUrls.length && performance.now() > nextAnim) {
    nextAnim = performance.now() + 45000 + Math.random() * 60000
    const url = animationUrls[Math.floor(Math.random() * animationUrls.length)]
    void playAnimation(url)
      .then(() => {
        setTimeout(() => {
          if (mixer) {
            mixer.stopAllAction()
            mixer = null
          }
        }, 8000)
      })
      .catch(() => {})
  }
  if (hiddenAt && performance.now() > hiddenAt) {
    bubble.classList.add("hidden")
    hiddenAt = 0
  }

  if (vrm) {
    vrm.scene.position.y = 0

    vrm.scene.rotation.y = baseYaw

    if (mixer) {
      mixer.update(delta)
    } else {
    addBoneRotation("leftUpperLeg", 0, 0, 0)
    addBoneRotation("rightUpperLeg", 0, 0, 0)
    addBoneRotation("head", Math.sin(time * 1.2) * 0.015, 0, 0)
    addBoneRotation("rightUpperArm", 0, 0, 1.1 + Math.sin(time * 1.6) * 0.03)
    addBoneRotation("leftUpperArm", 0, 0, -1.1 - Math.sin(time * 1.6) * 0.03)
    addBoneRotation("rightLowerArm", 0, 0, 0)
    addBoneRotation("leftLowerArm", 0, 0, 0)
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
void loadAnimationList()
void loadModelFiles()
void ensureDefaultModel()
