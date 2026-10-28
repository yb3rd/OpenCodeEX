import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { VRMLoaderPlugin, VRMUtils } from "@pixiv/three-vrm"

const canvas = document.getElementById("view")
const bubble = document.getElementById("bubble")
const muteButton = document.getElementById("mute")
const testButton = document.getElementById("test")
const danceButton = document.getElementById("dance")
const quitButton = document.getElementById("quit")

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

  camera.position.set(0, minY + height * 0.82, height * 1.45)
  camera.lookAt(0, minY + height * 0.75, 0)

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

function speak(text) {
  if (!voiceOn) return
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

let voiceOn = localStorage.getItem("pet.voice.v2") !== "0"

function updateMute() {
  muteButton.textContent = voiceOn ? "🔊" : "🔇"
}
updateMute()

muteButton.addEventListener("click", () => {
  voiceOn = !voiceOn
  localStorage.setItem("pet.voice.v2", voiceOn ? "1" : "0")
  if (!voiceOn) {
    speechSynthesis.cancel()
    speaking = false
  }
  updateMute()
})

testButton.addEventListener("click", () => {
  const text = lastText || "你好，我是 OpenCode 桌面宠物，语音测试正常。"
  showBubble(text)
  setPose("talk")
  speak(text)
})

danceButton.addEventListener("click", () => setPose("dance"))
quitButton.addEventListener("click", () => window.pet?.quit())

window.pet?.onMessage(({ text }) => {
  lastText = cleanText(text)
  showBubble(lastText)
  setPose("talk")
  speak(lastText)
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
