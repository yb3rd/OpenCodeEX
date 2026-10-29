# OpenCode 桌面宠物（VRM）

一个独立运行的透明置顶桌宠，有自己的对话记忆，不会把聊天写入 OpenCode 会话。
推理通过本地 OpenCode 服务的无状态生成接口完成（`/api/experimental/generate/text`），只借用模型能力。

当前有两套实现：

| 目录 | 技术栈 | 状态 |
| --- | --- | --- |
| `pet/tauri` | **Tauri v2（Rust 后端 + WebView 前端）** | 与 Desktop Homunculus 同栈，主推 |
| `pet/electron` | Electron + three-vrm | 旧版，保留作对照 |

两套前端共用同一套 VRM/VRMA 渲染逻辑，行为一致。

## 运行

### Tauri（推荐）

需要：Rust（stable）、Node.js、VS Build Tools（Windows）。

```bash
cd pet/tauri
npm install
npm run tauri dev
```

打包：

```bash
npm run tauri build
```

独立运行（debug，前端已内置，不需要 Vite）：

```bash
npm run build:debug
# 然后运行 src-tauri/target/debug/opencode-pet-tauri.exe
```

> 注意：当前机器 rustc 1.99 的 release 构建会报 core rlib 元数据异常；先用 `build:debug` 产物即可，换其他 Rust stable 工具链后 `tauri build` 可正常打包。

### 便携版

`OpenCodePet.exe` 会优先使用**同目录**下的 `models/` 和 `animations/`。把 exe 和这两个文件夹放在一起，整个目录可以随意移动，双击即可运行。

首次运行前准备模型与动作（均不入库）：

```text
pet/tauri/models/      放 *.vrm
pet/tauri/animations/  放 *.vrma
```

也可以启动后右键 →「设置」→「模型文件夹」/「导入动作」。

### Electron

```bash
cd pet/electron
npm install
npm run start
```

或双击 `start.bat`。

## 交互

| 操作 | 功能 |
| --- | --- |
| 拖动人物 | 移动窗口 |
| **双击人物** | 随机换一个动作（舞蹈 / 待机动作）；跳舞过程中双击 = 停止音乐和跳舞 |
| **右键人物** | 菜单：输入消息 / 点击穿透 / 朗读上一条 / 朗读下一条 / 静音 / 换模型 / 动作 / 跳舞 / 设置（最下）/ 退出；菜单右上角 ✕ 可关闭 |

「换模型」直接在右键菜单里展开 VRM 列表，选中即切换。
「动作」在右键菜单里展开 VRMA 列表，选中即播放；选「无（自然站立）」恢复默认站立。
「朗读下一条」会立刻触发一次主动说话（随机话题）并朗读。
聊天输入框在右键 →「输入消息」。
「设置」固定在菜单最下面，里面有模型文件夹、导入动作、声音等。

## 点击穿透

如果宠物挡住了其他窗口的输入框：

- 右键 → **🖱 点击穿透**，或按 **Ctrl+Alt+P**
- 开启后整个宠物窗口不接收鼠标，点击会直接落到下面的浏览器/输入框
- 再按 **Ctrl+Alt+P**，或右键系统托盘里的 OpenCodePet 图标 →「点击穿透」取消
- 状态会记住，下次启动保持

## 长期记忆

对话会写到本机 `memory/memory.json`，重启、关机、第二天打开都不会忘：

- `history`：最近 100 条对话（发送给模型时取最近 24 条）
- `summary`：每 4 轮对话自动整理一次长期记忆摘要（姓名/称呼、偏好、重要约定等）
- 首次启动会把旧的 `localStorage` 对话迁移进来
- 文件只在本地，不上传；想清空就关闭宠物后删除 `memory.json`

```text
OpenCodePet\
├─ OpenCodePet.exe
├─ memory\
│  └─ memory.json   ← 对话记忆
├─ mp3\
├─ models\
└─ animations\
```


## 跳舞 + 音乐

- 右键 → **💃 跳舞**：随机选一首 `mp3/` 里的音乐 + 随机选一个 `dance_*` 动作
- 音乐播放期间一直循环跳舞，音乐结束自动停止
- 跳舞过程中**双击人物**：立即停止音乐和跳舞
- 音乐文件夹在 exe 同级的 `mp3/`，放自己的 `.mp3` 即可；示例 `dance_demo.mp3` 是本地生成的 90 秒节拍
- 音频仅本机使用，不提交仓库

```text
OpenCodePet\
├─ OpenCodePet.exe
├─ mp3\            ← 音乐放这里
├─ models\
└─ animations\
```

对话记录保存在宠物自己的 `memory/memory.json`，不会出现在 OpenCode 的会话列表里。

透明区域点击穿透：Tauri 版用 Windows `SetWindowRgn` 按交互区域裁剪窗口，Electron 版用 `setShape`。
不挡其他应用的点击、输入框和任务栏。

## 自主行为

- **随机动作**：每 45–90 秒随机播放一段 VRMA（自然动作和舞蹈都会参与，随机播放 8 秒；`grabbed` 和 A–E 测试片段只在右键菜单手动选）
- **主动说话**：每 3–8 分钟随机挑一个话题，用 TTS 说出来
  - 打招呼
  - 问吃饭了没有
  - 天气（`wttr.in`，按 IP 定位）
  - AI 新闻（Hacker News Algolia）
  - 国际新闻（Hacker News 首页）
  - 二次元 / 日本动画（B 站动画排行榜）
  - 游戏（B 站游戏排行榜）
  - ACG（机核 RSS）
- 无网络或接口失败时自动降级为简短问候
- 输入框打开、设置打开或正在说话时不会自动说话

## 模型与动作

- 模型：默认 `AvatarSample_A`（VRM 0.0，本地文件，不入库）；右键 →「换模型」可直接切换
- 动作：`idle-maid` / `grabbed` / `idle-sitting`，来自 npm 包 `@hmcs/assets`
  - 作者：not-elm / Desktop Homunculus
  - 授权：**CC-BY-4.0**（`@hmcs/assets` 为 MIT AND CC-BY-4.0）
  - 仓库不提交 `.vrma` / `.vrm` 原文件，仅在本机使用；公开发布二进制时请保留署名
- 构建自己的动作：右键 →「导入动作文件」，选择 `.vrma`，会复制到 `animations/` 并立即播放；右键 →「动作」可直接展开列表选择，舞蹈会一直循环，直到选「无（自然站立）」或换其他动作

### 舞蹈动作（本机，不入库）

已下载并转换成 VRMA 的 Mixamo 舞蹈：

| 动作 | 时长 |
| --- | --- |
| `dance_ontop` | 24.3s |
| `dance_backup` | 25.4s |
| `dance_1` | 22.1s |
| `dance_2` | 20.4s |
| `dance_pushback` | 17.8s |
| `dance_headdrop` | 15.7s |
| `dance_gangnam_style` | 12.4s |
| `dance_northern_soul_spin` | 8.9s |
| `dance_dab` | 7.7s |
| `dance_marachinostep` | 3.3s |
| `dance_rumba` | 2.3s |

来源：SillyTavern VRM 动作包的 BVH，经 BVH→VRMA 工具转换（原始动作来自 Mixamo），仅本机个人使用。文件不提交仓库。


## 对话模型

设置 → 来源（`OpenCode Go` / `API`）+ 对话模型。首次启动会自动选一个 `flash` 模型；选择只影响宠物自己的对话，不切换 OpenCode 会话模型。

设置里还有声音、语速、音调，以及「模型文件夹」「导入动作」按钮；设置固定在右键菜单最下面，右上角 ✕ 可关闭。

## 语音

默认使用 **Edge TTS**（微软自然语音，需联网），内置 14 个中文音色：

| 类型 | 音色 |
| --- | --- |
| 普通话女 | 晓晓（温暖）、晓伊（活泼） |
| 普通话男 | 云健（激情）、云希（阳光）、云夏（可爱）、云扬（专业） |
| 方言 | 晓北（东北）、晓妮（陕西） |
| 粤语 | 曉佳、曉曼、雲龍 |
| 台湾 | 曉臻、曉雨、雲哲 |
| 离线 | 系统语音（回退） |

另支持**语速**（慢/稍慢/正常/稍快/快）和**音调**（低/正常/高）。

```bash
pip install edge-tts
```

想要更接近真人或克隆自己的声音，可以接：

- **CosyVoice 2**（阿里，零样本克隆，本地 GPU）
- **GPT-SoVITS**（1 分钟音频克隆，本地 GPU）
- **Fish Speech / IndexTTS**（高质量本地合成）
- **ElevenLabs**（付费，效果最好）
- **Piper**（离线、体积小，zh_CN-huayan-medium）

## 凭证

- 运行时只读取本机 `~/.local/state/opencode/service.json`（本地地址 + 口令），**不会复制到仓库**
- 仓库不含任何 token / API Key
- `.gitignore` 已屏蔽 `service.json`、`auth.json`、`.env`、`*.pem`
- OpenCode Go 的认证始终留在本机，不会上传 GitHub

## 已知限制

- 口型是按音节随机切换的近似动画，不是精确音素同步
- 推理依赖本地 OpenCode 服务在运行；如果要完全脱离 OpenCode，需要改成直连模型 API（填 baseURL + API Key）
- Tauri 版目前只在 Windows 上验证过透明窗口与点击穿透
