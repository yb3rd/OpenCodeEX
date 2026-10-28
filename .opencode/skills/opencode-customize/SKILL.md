---
name: OpenCode 定制
description: 在不修改 OpenCode 源码的前提下扩展 OpenCode，并保证升级不覆盖已有的自定义功能
metadata:
  opencode/autoinvoke: true
---

# OpenCode 定制

## 决策顺序

1. 能改配置就改配置（`opencode.jsonc`、`.opencode/`）
2. 配置做不到就写插件（`.opencode/plugins/`）
3. 插件 hook 覆盖不到核心行为才 fork 源码

## 各层能做什么

| 需求 | 位置 |
| --- | --- |
| 换默认模型、调权限 | `opencode.jsonc` |
| 加可复用的角色 | `.opencode/agents/<name>.md` |
| 加快捷指令 | `.opencode/commands/<name>.md` |
| 教模型一套流程 | `.opencode/skills/<id>/SKILL.md` |
| 加工具 / hooks / 集成 | `.opencode/plugins/<name>/index.ts` |
| 改 TUI 主题、快捷键 | `~/.config/opencode/cli.json` |

## 写插件的要点

- 入口：`export default Plugin.define({ id, setup(ctx) {...} })`
- `setup` 可以返回 cleanup 函数
- 注册用 transform：`ctx.tool.transform`、`ctx.command.transform`、`ctx.agent.transform`
- 拦截用 hook：`ctx.session.hook("prompt" | "context" | "compaction" | "title", fn)`
- 持久化用 `ctx.storage`
- 修改外部数据源后调用对应 `reload()`
- 本地插件放在 `.opencode/plugins/` 会自动加载

## 升级安全

- OpenCode 升级只替换程序本体，不会动 `~/.config/opencode/` 和项目的 `.opencode/`
- 唯一会破坏兼容的是插件 API，跨大版本时对照迁移指南改 `index.ts`
- 本仓库的所有自定义都在 Git 里，随时可回滚

## 文档

- 配置：https://opencode.ai/v2/docs/config
- 插件：https://opencode.ai/v2/docs/build/plugins
- 服务端插件 API：https://opencode.ai/v2/docs/build/plugins/server
- 故障排查：https://opencode.ai/v2/docs/troubleshooting
