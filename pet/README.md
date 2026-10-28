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

默认使用 **Edge TTS**（微软自然语音，需联网）：晓晓 / 云希 / 晓伊 / 云扬 / 系统语音回退。

```bash
pip install edge-tts
```

## 模型

- 默认 `app/public/sample.vrm`（three-vrm 官方示例，仅用于开发验证）
- 换成自己的：把 `.vrm` 放进 `app/public/`，改 `app/renderer.js` 的 `loader.loadAsync("./sample.vrm")`
- 模型文件不入库，请确认授权

## 已知限制

- 口型是按音节随机切换的近似动画，不是精确音素同步
- 推理依赖本地 OpenCode 服务在运行；如果要完全脱离 OpenCode，需要改成直连模型 API（填 baseURL + API Key）
