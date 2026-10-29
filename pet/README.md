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
| **右键人物** | 菜单：输入消息 / 点歌 / 点击穿透 / 主动聊天 / 朗读上一条 / 朗读下一条 / 静音 / 换模型 / 动作 / 跳舞 / 唱歌 / 设置（最下）/ 退出；菜单右上角 ✕ 可关闭 |

「换模型」直接在右键菜单里展开 VRM 列表，选中即切换。
「动作」在右键菜单里展开 VRMA 列表，选中即播放；列表不再提供「无/自然站立」，待机固定用 `idle-maid` 循环。
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
- 舞蹈动作比音乐短时会自动从头循环，直到音乐结束
- 停止后自动回到 `idle-maid` 待机动作，不会回到「无/自然站立」
- 跳舞过程中**双击人物**：立即停止音乐，并回到 `idle-maid` 待机
- 右键 → **🎤 唱歌**：播放 `mp3/` 里的歌曲 + 随机女性化动作 + 对口型，双击停止
  - 这是“播放歌曲 + 对口型/动作”，不是真正的歌声合成
  - Edge TTS 只能说话；真正让宠物用自己的声音唱，需要 DiffSinger / GPT-SoVITS / Sinsy 等歌声合成模型
- 音乐文件夹在 exe 同级的 `mp3/`，放自己的 `.mp3` 即可；示例 `dance_demo.mp3` 是本地生成的 90 秒节拍
- 音频仅本机使用，不提交仓库

```text
OpenCodePet\
├─ OpenCodePet.exe
├─ mp3\            ← 音乐放这里
├─ music_cache\    ← 在线点歌自动缓存
├─ models\
└─ animations\
```

### 在线点歌

可以直接对宠物说：

```text
播放 起风了
唱一首 大鱼
我想听 光年之外
点歌 周深
```

也可以右键 → **🎵 点歌**，在输入框里写歌名。

- 宠物会去网易云音乐搜索，下载可播放的版本到 `music_cache/`，然后播放 + 随机女性化动作 + 对口型
- 同一首歌第二次点会直接用缓存，不会重复下载
- 网上找不到时会尝试本地 `mp3/` 里同名的歌
- 只是“播放原曲 + 动作 + 对口型”，不是让宠物用自己的声音重新唱
- 网易云没有版权的歌可能只能找到翻唱版，或者直接提示找不到
- 在线源可能因版权、VIP 或网络原因不可用；`music_cache/` 可随时手动清空

### 女性化 / 情绪动作

已额外加入 21 个（与 11 个舞蹈合计 42 个动作）：

- 情绪/可爱：`action_attention_seeking`、`action_pat`、`action_greeting`、`admiration`、`caring`、`curiosity`、`embarrassment`、`excitement`、`gratitude`、`joy`、`love`、`love2`、`pride`
- 待机/姿势：`neutral_idle`、`sit_idle`、`kneel_idle`、`laying_idle`
- 现成 VRMA：`hello`、`greeting`、`greeting2`、`peace sign`

来源：SillyTavern VRM 动作包的 BVH/VRMA（原始动作来自 Mixamo），仅本机个人使用，不提交仓库。右键「动作」即可选。

### 自动取景

坐、跪、躺这类动作会改变身体高度，固定镜头容易把腿或头裁掉。现在每次动作会根据头/手/脚/髋等骨骼的实际位置自动调整镜头距离和中心：

- 站立动作保持原来的大小
- 坐/跪/躺自动拉远并把人物移到画面中间
- 舞蹈时镜头会平滑跟随，不再只缩放不回退（不会越跳越近）
- 镜头只拉远不额外放大，避免身体部位被裁出窗口

对话记录保存在宠物自己的 `memory/memory.json`，不会出现在 OpenCode 的会话列表里。

透明区域点击穿透：Tauri 版用 Windows `SetWindowRgn` 按交互区域裁剪窗口，Electron 版用 `setShape`。
不挡其他应用的点击、输入框和任务栏。

## 自主行为

- **随机动作**：每 45–90 秒随机播放一段 VRMA（自然动作和舞蹈都会参与，随机播放 8 秒；`grabbed` 和 A–E 测试片段只在右键菜单手动选）
- **主动说话**：默认「经常」，每 1–2 分钟主动找你说一次话
  - 右键 →「💬 主动聊天」或设置里的「主动聊天」可切换：关闭 / 普通（3–7 分钟）/ 经常（1–2 分钟）/ 很频繁（30–60 秒）
  - 大约三分之一是**带选项的提问**，气泡下方会出现 2–3 个可点击按钮，点一下就会把选择发给宠物
  - 提问之间至少隔约 4 分钟；同一道题不会短时间重复，已经回答过的问题会记很久（本地保存提问记录）
  - 会按早上/中午/下午/晚上挑合适的题目；如果最近聊过“吃饭”或“心情”，会先换别的话题
  - 一部分问题由模型结合长期记忆和最近对话临时生成，不是每次都从固定题库里挑
  - 其余时间更像真人：日常吐槽、关心、打招呼、天气或新闻，不会一直追问
  - 也可以选「📰 来一条」「🎤 唱吧」「💃 跳吧」「安静会儿」等特殊选项，直接触发新闻、唱歌、跳舞或安静陪伴
  - 其余话题：打招呼 / 天气 / AI、国际、二次元、游戏、ACG 新闻
- 无网络或接口失败时自动降级为简短问候
- 输入框打开、设置打开、新闻详情打开或正在说话/跳舞时不会自动说话
- 点击穿透开启时先按 **Ctrl+Alt+P** 关闭，否则选项按钮点不到
- **新闻详情**：播报新闻后气泡下方会出现 **📰 详细** 按钮；点开可看完整标题/来源，点标题用浏览器打开原文

## 模型与动作

- 模型：默认 `AvatarSample_A`（VRM 0.0，本地文件，不入库）；右键 →「换模型」可直接切换
- 动作：`idle-maid` / `grabbed` / `idle-sitting`，来自 npm 包 `@hmcs/assets`
  - 作者：not-elm / Desktop Homunculus
  - 授权：**CC-BY-4.0**（`@hmcs/assets` 为 MIT AND CC-BY-4.0）
  - 仓库不提交 `.vrma` / `.vrm` 原文件，仅在本机使用；公开发布二进制时请保留署名
- 构建自己的动作：右键 →「导入动作文件」，选择 `.vrma`，会复制到 `animations/` 并立即播放；右键 →「动作」可直接展开列表选择，动作会一直循环到换其他动作

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
| 普通话女 | 晓晓（温暖）、晓伊（二次元） |
| 普通话男 | 云健（激情）、云希（阳光）、云夏（可爱）、云扬（专业） |
| 方言 | 晓北（东北）、晓妮（陕西） |
| 日语女 | 七海（Nanami） |
| 韩语女 | SunHi |
| 多语言女 | Ava、Emma、Vivienne、Seraphina、Thalita（可能带外语口音） |
| 粤语 | 曉佳、曉曼、雲龍 |
| 台湾 | 曉臻、曉雨、雲哲 |
| 离线 | 系统语音（回退） |

Edge TTS 的 `zh-CN` 女声目前只有晓晓和晓伊，其他中文女声是方言/粤语/台湾；新增的日语、韩语和多语言女声是云端音色，不需要本地下载，选中即用。

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
