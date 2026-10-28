# OpenCode 桌面宠物（Electron + VRM）

一个独立运行的透明置顶桌宠，有自己的对话记忆，不会把聊天写入 OpenCode 会话。
推理通过本地 OpenCode 服务的无状态生成接口完成（`/api/experimental/generate/text`），只借用模型能力。

## 运行

```bash
cd pet/electron
npm install
npm run start
```

或双击 `start.bat`。

## 交互

| 操作 | 功能 |
| --- | --- |
| 拖动人物 | 移动到桌面任意位置 |
| **双击人物** | 打开输入框，和宠物对话（Enter 发送，Esc 关闭） |
| **右键人物** | 菜单：输入消息 / 朗读上一条 / 静音 / 跳舞 / 模型设置 / 退出 |

对话记录保存在宠物自己的 `localStorage`（最近 20 条），不会出现在 OpenCode 的会话列表里。

## 模型设置

右键 → 模型设置：

- **来源**：`OpenCode Go` 或 `API`
- **模型**：从 `/api/model` 拉取对应来源的模型列表
- 选择只影响宠物自己的对话，不切换 OpenCode 会话模型

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

## 模型

- 默认 `app/public/sample.vrm`（three-vrm 官方示例，仅用于开发验证）
- 换成自己的：把 `.vrm` 放进 `app/public/`，改 `app/renderer.js` 的 `loader.loadAsync("./sample.vrm")`
- 模型文件不入库，请确认授权

## 已知限制

- 口型是按音节随机切换的近似动画，不是精确音素同步
- 推理依赖本地 OpenCode 服务在运行；如果要完全脱离 OpenCode，需要改成直连模型 API（填 baseURL + API Key）
