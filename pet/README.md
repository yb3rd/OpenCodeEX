# OpenCode 桌面宠物（Electron + VRM）

独立于 OpenCode 窗口的透明置顶宠物：读取 OpenCode 本地服务的最近回复，气泡显示并朗读；支持直接发消息和切换模型。

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
| **双击人物** | 打开输入框，直接给 OpenCode 发消息（Enter 发送，Esc 关闭） |
| **右键人物** | 菜单：输入消息 / 朗读上一条 / 静音 / 跳舞 / 模型设置 / 退出 |

## 模型设置

右键 → 模型设置：

- **来源**：`OpenCode Go` 或 `API`
- **模型**：从 `/api/model` 拉取对应来源的模型列表
- 切换后写入当前会话（`POST /api/session/{id}/model`）
- 选择保存在 `localStorage`

## 语音

默认使用 **Edge TTS**（微软自然语音，需联网）：

- 晓晓（女，自然，默认）
- 云希（男，自然）
- 晓伊（女，活泼）
- 云扬（男，新闻）
- 系统语音（离线回退）

依赖：

```bash
pip install edge-tts
```

离线或合成失败时自动回退到系统 TTS。

## 模型

- 默认 `app/public/sample.vrm`（three-vrm 官方示例，仅用于开发验证）
- 换成自己的：把 `.vrm` 放进 `app/public/`，改 `app/renderer.js` 的 `loader.loadAsync("./sample.vrm")`
- 模型文件不入库，请确认授权

## 已知限制

- 口型是按音节随机切换的近似动画，不是精确音素同步
- 只读取最近会话的最后一条助手回复
- 窗口大小固定 400×560 DIP，按屏幕缩放换算物理尺寸
