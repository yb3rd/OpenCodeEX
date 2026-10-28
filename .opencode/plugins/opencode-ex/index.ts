import { Plugin } from "@opencode/plugin"

const PREFIX = "notes/"

interface Note {
  text: string
  updated: string
}

/**
 * OpenCodeEX 自定义插件。
 *
 * 这里演示两种最常用的能力：
 *   1. ctx.tool.transform —— 注册自定义工具
 *   2. ctx.storage         —— 插件私有的持久化存储
 *
 * 保存文件后 OpenCode 会自动重载插件，无需重启。
 */
export default Plugin.define({
  id: "opencode-ex",

  async setup(ctx) {
    console.log(`[opencode-ex] loaded in OpenCode ${ctx.app.version}`)

    await ctx.tool.transform((editor) => {
      editor.add({
        name: "note_save",
        description: "保存一条笔记到 OpenCodeEX 的插件存储，键名相同则覆盖",
        input: {
          type: "object",
          properties: {
            key: { type: "string", description: "笔记键名，例如 design/decision" },
            text: { type: "string", description: "笔记正文" },
          },
          required: ["key", "text"],
          additionalProperties: false,
        },
        execute: async (input) => {
          const { key, text } = input as { key: string; text: string }
          const note: Note = { text, updated: new Date().toISOString() }
          await ctx.storage.set(PREFIX + key, note)
          return { content: `已保存笔记：${key}` }
        },
      })

      editor.add({
        name: "note_list",
        description: "列出 OpenCodeEX 插件存储中的全部笔记",
        input: {
          type: "object",
          properties: {},
          additionalProperties: false,
        },
        execute: async () => {
          const page = await ctx.storage.scan({ prefix: PREFIX, limit: 100 })
          if (page.entries.length === 0) {
            return { content: "暂无笔记。" }
          }

          const lines = page.entries.map(({ key, value }) => {
            const note = value as unknown as Note
            return `- ${key.slice(PREFIX.length)}: ${note.text} (${note.updated})`
          })
          return { content: lines.join("\n") }
        },
      })
    })

    // 示例：拦截并改写用户提示词。去掉注释即可生效。
    // await ctx.session.hook("prompt", (event) => {
    //   event.prompt.text = event.prompt.text.replaceAll("TODO", "请补全")
    // })

    // 示例：给每次模型请求追加系统指令。
    // await ctx.session.hook("context", (event) => {
    //   event.system.push({ type: "text", text: "回答保持简洁，先给结论。" })
    // })

    return () => console.log("[opencode-ex] unloaded")
  },
})
