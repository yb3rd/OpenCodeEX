# OpenCodeEX

对 [OpenCode](https://opencode.ai/v2/docs/) 的个人定制版本。

**核心原则：不修改 OpenCode 源码。** 所有功能都通过配置和插件实现，放在本仓库里用 Git 管理。
这样 OpenCode 本体可以随便升级，你的自定义不会被覆盖。

## 目录结构

```text
OpenCodeEX/
├─ opencode.jsonc                     # 项目配置（模型、插件、权限等）
├─ .gitattributes                     # 统一换行符，避免 Windows 下 diff 噪音
├─ .opencode/
│  ├─ agents/
│  │  └─ reviewer.md                  # 只读代码审查 subagent
│  ├─ commands/
│  │  └─ standup.md                   # /standup 站会汇报
│  ├─ skills/
│  │  └─ opencode-customize/
│  │     └─ SKILL.md                  # 教 agent 如何安全扩展 OpenCode
│  └─ plugins/
│     └─ opencode-ex/
│        ├─ package.json
│        └─ index.ts                  # 自定义工具：note_save / note_list
└─ plugins/
   └─ opencodeex/                     # 桌面 GUI 插件：项目快捷入口
      ├─ index.ts                     # 服务端部分（声明 id）
      ├─ gui.tsx                      # 窗口部分（左侧常驻 Dock）
      ├─ vite.config.ts
      └─ dist/gui-experimental.cjs    # 构建产物，桌面端直接加载
```

`.opencode/` 下的 agents、commands、skills、plugins 都会被自动发现，不需要在配置里逐个注册。

## 快速开始

```bash
cd OpenCodeEX
opencode
```

OpenCode 会把当前目录当作项目，自动加载 `.opencode/` 下的全部内容。

## 三层扩展，按升级安全度排序

| 层级 | 能改什么 | 位置 | 升级会覆盖吗 |
| --- | --- | --- | --- |
| 配置 | 模型、权限、agent、命令、skill、MCP、主题 | `opencode.jsonc`、`.opencode/` | 不会 |
| 插件 | 工具、hooks、集成、命令、agent、TUI/GUI 界面 | `.opencode/plugins/` | 不会，但插件 API 跨大版本可能变 |
| Fork 源码 | 核心逻辑、内置工具实现 | 自己的 fork | 会冲突，需要自己 rebase |

优先用前两层。只有插件 hook 覆盖不到的行为，才考虑 fork。

### 什么时候需要 fork

- 要改内置工具（read/edit/bash 等）的实现
- 要改 server 内部调度、压缩、权限判定逻辑
- 要改 TUI 核心渲染

fork 的正确姿势：

```bash
git clone https://github.com/anomalyco/opencode.git
git remote add upstream https://github.com/anomalyco/opencode.git
git checkout -b my-features
# 只做最小改动，单独提交
git fetch upstream && git rebase upstream/dev
```

## 桌面插件：左侧常驻项目栏（opencodeex）

`plugins/opencodeex` 是一个 OpenCode Desktop GUI 插件，在窗口左侧常驻显示所有项目。

效果：

- 左侧固定一列项目列表，样式与 OpenCode 原生项目列表一致（图标徽标 + 名称 + 选中高亮）
- 主内容区自动右移 320px 让位，不遮挡聊天
- 点击项目 → 打开该项目最近一次会话；没有会话时新建空白会话
- 悬停项目行右侧出现「×」→ 从列表隐藏该项目
- 右键项目 → 打开文件夹 / 在资源管理器中定位 / 复制路径
- 标题栏「⊘」→ 列出已隐藏项目，点击恢复
- 标题栏「+」→ 打开目录选择器添加项目
- 标题栏「⟳」刷新、「‹」收起
- 拖动右侧边缘调整宽度（220–560px，双击复位）
- 收起后左侧边缘出现小箭头「›」，点击展开
- 在对话正文中**右键链接或绝对路径** → 打开文件夹 / 在资源管理器中定位 / 复制路径（支持 `E:\...`、`\\server\...`、`/home/...` 和 `file://` 链接）

切换显示：

| 入口 | 位置 |
| --- | --- |
| 标题栏胶囊按钮「项目」 | 窗口标题栏，按下态表示当前可见 |
| 命令面板「显示/隐藏项目栏」 | `Ctrl+P` 搜索 |
| 快捷键 | `Ctrl+Alt+P` |
| 左侧项目菜单「项目」 | 点开左上角项目名后的菜单 |

显隐状态记在 `localStorage`，重启后保持。

### 注册方式

GUI 插件必须写在**全局**配置里，桌面端才会在所有窗口加载：

`C:\Users\19142\.config\opencode\opencode.json`

```jsonc
{
  "plugins": [
    { "package": "file:///E:/WK/OpenCode/OpenCodeEX/plugins/opencodeex" }
  ]
}
```

> 这里用的是绝对路径。如果移动了 `OpenCodeEX` 目录，要同步改这一行。

### 修改与构建

```bash
cd plugins/opencodeex
npm install              # 首次
npx vite build           # 产出 dist/gui-experimental.cjs
npx vite build --watch   # 开发时自动重建，窗口会热重载
```

`dist/gui-experimental.cjs` 已提交到仓库，因为桌面端直接从磁盘加载它。

### 说明

- GUI 插件 API 目前是实验性的（导出名 `./gui-experimental`），桌面端大版本升级后可能需要跟进调整。
- 左侧栏通过独立挂载到 `document.body` 实现，并给 `main` 加 `padding-left` 让位；如果 OpenCode 大改布局，这部分 CSS 可能需要跟着调整。
- 插件 id 是 `opencodeex`（项目文件夹名的小写形式），界面显示名是 `OpenCodeEX`。

## 插件开发

当前 `.opencode/plugins/opencode-ex` 演示了两件事：

1. **注册工具**：`ctx.tool.transform(editor => editor.add({...}))`
2. **持久化存储**：`ctx.storage.set/get/scan`

改完 `index.ts` 后保存即可，OpenCode 会自动重载插件。日志在：

```text
~/.local/share/opencode/log/opencode.log
```

过滤 `role=server` 查看插件加载和报错。

### 常用能力

```ts
// 加一个工具
await ctx.tool.transform((editor) => editor.add({ name, description, input, execute }))

// 拦截用户提示词
await ctx.session.hook("prompt", (event) => {
  event.prompt.text = event.prompt.text.replaceAll("secret", "[redacted]")
})

// 修改发给模型的系统指令
await ctx.session.hook("context", (event) => {
  event.system.push({ type: "text", text: "回答保持简洁。" })
})

// 注册斜杠命令
await ctx.command.transform((editor) => {
  editor.add({ name: "deploy", description: "部署", execute: async ({ sessionID, prompt, delivery }) => {
    await ctx.session.prompt({ sessionID, text: `部署：${prompt.text}`, delivery })
  }})
})
```

## 发布成 npm 包（可选）

如果以后想给别人用，把 `package.json` 的 `private` 改成 `false`，然后：

```bash
npm publish
```

其他人在 `opencode.jsonc` 里加：

```jsonc
{
  "plugins": ["opencode-ex@0.1.0"]
}
```

## 升级 OpenCode

直接升级，不需要任何迁移步骤：

```bash
opencode upgrade
```

本仓库的所有内容都在配置目录和项目目录里，升级只会替换程序本体，不会触碰这里。

唯一需要注意的是**插件 API**：OpenCode V1 → V2 就变更过插件 API。跨大版本升级后如果插件报错，
对照 [插件迁移指南](https://opencode.ai/v2/docs/build/plugins/migrate-v1) 改一下 `index.ts` 即可。

## 参考

- [配置](https://opencode.ai/v2/docs/config)
- [插件](https://opencode.ai/v2/docs/build/plugins)
- [Agent](https://opencode.ai/v2/docs/agents)
- [命令](https://opencode.ai/v2/docs/commands)
- [Skill](https://opencode.ai/v2/docs/skills)
