import { Command, Plugin, Slot, Style, TitlebarItem } from "@opencode/plugin/gui"
import { For, Show, createSignal, onMount } from "solid-js"

interface ProjectInfo {
  id: string
  canonical: string
  name?: string
}

const basename = (path: string) => path.replace(/[\\/]+$/, "").split(/[\\/]/).pop() || path

const css = `
.opencodeex-list{display:flex;flex-direction:column;gap:2px;max-height:56vh;overflow:auto;margin:0;padding:0;list-style:none}
.opencodeex-item{display:flex;flex-direction:column;align-items:flex-start;gap:2px;width:100%;padding:8px 10px;border:0;border-radius:6px;background:transparent;color:inherit;text-align:left;cursor:pointer;font:inherit}
.opencodeex-item:hover{background:rgba(127,127,127,.14)}
.opencodeex-name{font-weight:600}
.opencodeex-path{font-size:12px;opacity:.6;word-break:break-all}
.opencodeex-empty{padding:16px 4px;opacity:.7}
.opencodeex-menu-item{display:flex;align-items:center;gap:8px;width:100%;padding:6px 8px;border:0;border-radius:6px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}
.opencodeex-menu-item:hover{background:rgba(127,127,127,.14)}
`

/**
 * OpenCodeEX 桌面插件：项目快捷入口。
 *
 * 提供三种打开方式：
 *   1. 标题栏胶囊按钮（始终可见）
 *   2. 命令面板 / 快捷键 mod+alt+p
 *   3. 命令名 opencodeex.projects
 */
export default Plugin.define({
  i18n: {
    en: {
      title: "Projects",
      description: "All projects known to this OpenCode server",
      button: "Projects",
      command: "Switch project",
      empty: "No projects yet",
      close: "Close",
      error: "Could not load projects",
      retry: "Retry",
    },
    zh: {
      title: "所有项目",
      description: "当前 OpenCode 服务已知的全部项目",
      button: "项目",
      command: "切换项目",
      empty: "还没有任何项目",
      close: "关闭",
      error: "项目列表加载失败",
      retry: "重试",
    },
  },

  setup(ctx) {
    console.log(`[opencodeex] gui setup in OpenCode ${ctx.app.version}`)

    const ui = ctx.ui

    ctx.add(Style, css)

    const label = (project: ProjectInfo) => project.name?.trim() || basename(project.canonical)

    /** 桌面端自己的服务 id 固定为 sidecar，这里做一次兜底查找。 */
    const builtinServer = () => {
      for (const id of ctx.servers.list()) {
        if (ctx.servers.get(id)?.builtin) return id
      }
      return "sidecar"
    }

    const openProject = (project: ProjectInfo) => {
      ctx.layout.draft({ server: builtinServer(), directory: project.canonical, prompt: "" })
    }

    function ProjectsDialog(props: { close(): void }) {
      const [projects, setProjects] = createSignal<readonly ProjectInfo[]>()
      const [error, setError] = createSignal<string>()

      const load = () => {
        setError(undefined)
        setProjects(undefined)
        void ctx.client.project
          .list()
          .then((list) => setProjects(list as readonly ProjectInfo[]))
          .catch((err: unknown) => setError(err instanceof Error ? err.message : String(err)))
      }

      onMount(load)

      return (
        <ui.Dialog
          title={ctx.t("title")}
          description={ctx.t("description")}
          size="normal"
          footer={
            <ui.Button variant="ghost" onClick={props.close}>
              {ctx.t("close")}
            </ui.Button>
          }
        >
          <Show
            when={!error()}
            fallback={
              <div class="opencodeex-empty">
                <p>{ctx.t("error")}</p>
                <p class="opencodeex-path">{error()}</p>
                <ui.Button variant="neutral" size="small" onClick={load}>
                  {ctx.t("retry")}
                </ui.Button>
              </div>
            }
          >
            <Show when={projects()} fallback={<ui.Loader size="large" />}>
              {(items) => (
                <Show
                  when={items().length > 0}
                  fallback={<p class="opencodeex-empty">{ctx.t("empty")}</p>}
                >
                  <ul class="opencodeex-list">
                    <For each={items()}>
                      {(project) => (
                        <li>
                          <button
                            type="button"
                            class="opencodeex-item"
                            onClick={() => {
                              openProject(project)
                              props.close()
                            }}
                          >
                            <span class="opencodeex-name">{label(project)}</span>
                            <span class="opencodeex-path">{project.canonical}</span>
                          </button>
                        </li>
                      )}
                    </For>
                  </ul>
                </Show>
              )}
            </Show>
          </Show>
        </ui.Dialog>
      )
    }

    const openDialog = () => {
      ctx.dialogs.open((dialog) => <ProjectsDialog close={() => dialog.close()} />)
    }

    ctx.add(
      TitlebarItem,
      (): TitlebarItem => ({
        id: "projects",
        label: ctx.t("button"),
        title: ctx.t("title"),
        icon: "layout-left",
        run: openDialog,
      }),
    )

    ctx.add(
      Command,
      (): Command => ({
        id: "projects",
        title: ctx.t("command"),
        description: ctx.t("description"),
        keywords: "project workspace switch 项目 切换",
        section: "navigation",
        bind: "mod+alt+p",
        run: openDialog,
      }),
    )

    // 左侧项目菜单里的入口：点开项目名后可以直接看到「所有项目」
    ctx.add(Slot, {
      at: "session.location.menu",
      order: -10,
      render: (input) => (
        <Show when={input.shown}>
          <button type="button" class="opencodeex-menu-item" onClick={openDialog}>
            <ui.Icon name="layout-left" size="small" />
            <span>{ctx.t("title")}</span>
          </button>
        </Show>
      ),
    })
  },
})
