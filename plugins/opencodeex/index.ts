import { Plugin } from "@opencode/plugin"

/**
 * OpenCodeEX 桌面插件的服务端部分。
 *
 * 这里只做一件事：声明插件 id。
 * GUI 部分在 gui.tsx，构建后由 OpenCode Desktop 加载（见 dist/gui-experimental.cjs）。
 */
export default Plugin.define({
  id: "opencodeex",

  async setup(ctx) {
    console.log(`[opencodeex] server loaded in OpenCode ${ctx.app.version}`)
    return () => console.log("[opencodeex] server unloaded")
  },
})
