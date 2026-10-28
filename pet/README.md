# OpenCode 桌面宠物（Electron + VRM）

独立于 OpenCode 窗口的透明置顶宠物：读取 OpenCode 本地服务的最近回复，显示气泡并朗读。

## 运行

```bash
cd pet/electron
npm install
npm run start
```

`npm run start` 会先 `vite build` 再启动 Electron。

## 模型

- 默认使用 `app/public/sample.vrm`（three-vrm 官方示例模型，仅用于开发验证）
- 换成自己的模型：把 `.vrm` 放到 `app/public/`，改 `app/renderer.js` 里的 `loader.loadAsync("./sample.vrm")`
- 模型授权请自行确认，不要把模型提交到仓库

## 功能

- 透明、无边框、置顶窗口，拖顶部 ⠿ 移动
- 每 3 秒轮询 OpenCode 本地服务，新回复 → 气泡 + 语音
- 语音：Web Speech API，优先中文嗓音
- 动作：待机呼吸、眨眼、说话点头/口型、挥手、跳舞
- 按钮：🔊 静音切换、📢 朗读测试、💃 跳舞、× 退出
- 3 秒一次的置顶保持，避免被其他窗口盖住

## 限制

- 口型是按音节随机切换的近似动画，不是精确音素同步
- 模型需要 VRM 1.0/0.x，带 `aa/ih/ou/ee/oh/blink` 表情
- 只读取最近会话的最后一条助手回复
