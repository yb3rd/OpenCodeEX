import { Command, Plugin, Slot, Style, TitlebarItem } from "@opencode/plugin/gui"
import { For, Show, createEffect, createSignal, onCleanup, onMount } from "solid-js"
import { render } from "solid-js/web"

interface ProjectInfo {
  id: string
  canonical: string
  name?: string
  icon?: { url?: string; override?: string; color?: string }
}

const DOCK_WIDTH = 320
const STORAGE_KEY = "opencodeex.dock.open"
const WIDTH_KEY = "opencodeex.width"
const HIDDEN_KEY = "opencodeex.hidden"

const basename = (path: string) => path.replace(/[\\/]+$/, "").split(/[\\/]/).pop() || path

const css = `
#opencodeex-dock{position:fixed;left:0;bottom:0;width:var(--opencodeex-width,320px);z-index:60;display:flex;flex-direction:column;box-sizing:border-box;background:var(--v2-background-bg-base,#171717);border-right:1px solid var(--v2-border-border-base,rgba(127,127,127,.22))}
body.opencodeex-docked main{padding-left:var(--opencodeex-width,320px);box-sizing:border-box}
#opencodeex-peek{position:fixed;left:0;top:45%;z-index:60;display:none}
.opencodeex-peek{display:flex;align-items:center;justify-content:center;width:18px;height:52px;padding:0;border:1px solid rgba(127,127,127,.25);border-left:0;border-radius:0 8px 8px 0;background:var(--v2-background-bg-base,#171717);color:inherit;cursor:pointer;opacity:.7}
.opencodeex-peek:hover{opacity:1}
.opencodeex-resize{position:absolute;top:0;right:-3px;bottom:0;width:6px;cursor:col-resize;z-index:2}
.opencodeex-resize:hover{background:rgba(127,127,127,.28)}
.opencodeex-panel{display:flex;flex-direction:column;gap:6px;height:100%;box-sizing:border-box;padding:10px 8px}
.opencodeex-head{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:2px 6px 4px}
.opencodeex-title{font-size:14px;font-weight:600;line-height:1.2}
.opencodeex-list{display:flex;flex-direction:column;gap:1px;flex:1;overflow:auto;margin:0;padding:0;list-style:none}
.opencodeex-item{display:flex;align-items:center;gap:10px;width:100%;padding:7px 30px 7px 8px;border:0;border-radius:8px;background:transparent;color:inherit;text-align:left;cursor:pointer;font:inherit}
.opencodeex-row{position:relative;display:flex}
.opencodeex-hide{position:absolute;right:5px;top:50%;transform:translateY(-50%);display:flex;align-items:center;justify-content:center;width:22px;height:22px;padding:0;border:0;border-radius:6px;background:transparent;color:inherit;opacity:0;cursor:pointer}
.opencodeex-row:hover .opencodeex-hide{opacity:.5}
.opencodeex-row .opencodeex-hide:hover{opacity:1;background:rgba(127,127,127,.2)}
.opencodeex-item:hover{background:rgba(127,127,127,.12)}
.opencodeex-item[data-current="true"]{background:rgba(127,127,127,.2)}
.opencodeex-badge{display:flex;align-items:center;justify-content:center;flex:none;width:22px;height:22px;border-radius:6px;background:rgba(127,127,127,.22);font-size:11px;font-weight:600;line-height:1}
.opencodeex-name{font-size:13px;font-weight:500;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.opencodeex-path{font-size:11px;opacity:.55;word-break:break-all;line-height:1.3}
.opencodeex-empty{padding:12px 8px;opacity:.7;font-size:13px}
.opencodeex-menu-item{display:flex;align-items:center;gap:8px;width:100%;padding:6px 8px;border:0;border-radius:6px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}
.opencodeex-menu-item:hover{background:rgba(127,127,127,.14)}
.opencodeex-backdrop{position:fixed;inset:0;z-index:90}
.opencodeex-context{position:fixed;z-index:91;min-width:190px;padding:4px;border-radius:8px;background:var(--v2-background-bg-base,#1f1f1f);border:1px solid rgba(127,127,127,.25);box-shadow:0 8px 24px rgba(0,0,0,.35)}
.opencodeex-context-item{display:flex;align-items:center;gap:8px;width:100%;padding:7px 10px;border:0;border-radius:6px;background:transparent;color:inherit;font:inherit;font-size:13px;text-align:left;cursor:pointer}
.opencodeex-context-item:hover{background:rgba(127,127,127,.18)}
.opencodeex-context-path{max-width:280px;padding:6px 10px 4px;font-size:11px;opacity:.55;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#opencodeex-menu{position:fixed;inset:0;z-index:9998;pointer-events:none}
#opencodeex-menu .opencodeex-backdrop{pointer-events:auto}
#opencodeex-menu .opencodeex-context{pointer-events:auto}
`

/**
 * OpenCodeEX 桌面插件：左侧常驻项目列表。
 *
 * 面板独立挂载在 document.body 上，不依赖 OpenCode 的 side 区域，
 * 因此可以固定在窗口左侧；同时给 main 增加左内边距，避免遮挡聊天区。
 */
export default Plugin.define({
  i18n: {
    en: {
      title: "Projects",
      description: "All projects known to this OpenCode server",
      button: "Projects",
      command: "Toggle project dock",
      empty: "No projects yet",
      error: "Could not load projects",
      retry: "Retry",
      refresh: "Refresh",
      collapse: "Collapse",
      expand: "Expand",
      resize: "Drag to resize, double-click to reset",
      add: "Add project",
      hidden: "Hidden projects",
      hide: "Hide",
      openFolder: "Open folder",
      revealFolder: "Reveal in Explorer",
      copyPath: "Copy path",
      allHidden: "All projects are hidden",
      current: "Current project",
    },
    zh: {
      title: "项目",
      description: "当前 OpenCode 服务已知的全部项目",
      button: "项目",
      command: "显示/隐藏项目栏",
      empty: "还没有任何项目",
      error: "项目列表加载失败",
      retry: "重试",
      refresh: "刷新",
      collapse: "收起",
      expand: "展开",
      resize: "拖动调整宽度，双击复位",
      add: "添加项目",
      hidden: "已隐藏的项目",
      hide: "隐藏",
      openFolder: "打开文件夹",
      revealFolder: "在资源管理器中定位",
      copyPath: "复制路径",
      allHidden: "项目都已隐藏",
      current: "当前项目",
    },
  },

  setup(ctx) {
    console.log(`[opencodeex] gui setup in OpenCode ${ctx.app.version}`)

    const ui = ctx.ui
    ctx.add(Style, css)

    const [open, setOpen] = createSignal<boolean>(localStorage.getItem(STORAGE_KEY) !== "0")

    const label = (project: ProjectInfo) => project.name?.trim() || basename(project.canonical)

    const badgeText = (project: ProjectInfo) => {
      const override = project.icon?.override?.trim()
      if (override && override.length <= 3) return override
      return (label(project) || "?").slice(0, 1).toUpperCase()
    }

    const badgeColor = (project: ProjectInfo) => project.icon?.color || undefined

    const builtinServer = () => {
      for (const id of ctx.servers.list()) {
        if (ctx.servers.get(id)?.builtin) return id
      }
      return "sidecar"
    }

    const pathKey = (project: ProjectInfo) => project.canonical.replace(/[\\/]+$/, "").toLowerCase()

    const openProject = async (project: ProjectInfo) => {
      const server = builtinServer()
      try {
        const page = await ctx.client.session.list({
          directory: project.canonical,
          limit: 20,
          order: "desc",
          archived: "false",
        })
        const latest = page.data.find((session) => !session.parentID)
        if (latest) {
          ctx.tabs.open({ server, id: latest.id }, { focus: true })
          return
        }
      } catch (err) {
        console.error("[opencodeex] session.list failed", err)
      }
      ctx.layout.draft({ server, directory: project.canonical, prompt: "" })
    }

    const readHidden = (): string[] => {
      try {
        const parsed = JSON.parse(localStorage.getItem(HIDDEN_KEY) ?? "[]")
        return Array.isArray(parsed) ? parsed.filter((value): value is string => typeof value === "string") : []
      } catch {
        return []
      }
    }

    const [hidden, setHidden] = createSignal<string[]>(readHidden())
    const hiddenSet = () => new Set(hidden())

    const persistHidden = (next: string[]) => {
      setHidden(next)
      localStorage.setItem(HIDDEN_KEY, JSON.stringify(next))
    }

    const hideProject = (project: ProjectInfo) => {
      const key = pathKey(project)
      if (hiddenSet().has(key)) return
      persistHidden([...hidden(), key])
    }

    const restoreProject = (key: string) => persistHidden(hidden().filter((value) => value !== key))

    const openFolder = async (project: ProjectInfo) => {
      if (!ctx.desktop) {
        await ctx.system.copy(project.canonical)
        return
      }
      await ctx.desktop.launch(project.canonical)
    }

    const revealFolder = async (project: ProjectInfo) => {
      if (ctx.desktop && (await ctx.desktop.reveal(project.canonical))) return
      await ctx.system.copy(project.canonical)
    }

    const copyPath = async (project: ProjectInfo) => {
      await ctx.system.copy(project.canonical)
    }

    const isAbsolutePath = (value: string) =>
      /^[a-zA-Z]:[\\/]/.test(value) ||
      /^\\\\/.test(value) ||
      (value.startsWith("/") && value.length > 1 && !value.startsWith("//"))

    const cleanToken = (value: string) => value.replace(/^[("'`<\[]+/, "").replace(/[)"'`>\],.;:]+$/, "")

    const pathFromHref = (href: string | null): string | undefined => {
      if (!href) return undefined
      if (href.startsWith("file://")) {
        try {
          let path = decodeURIComponent(href.slice("file://".length))
          if (/^\/[a-zA-Z]:/.test(path)) path = path.slice(1)
          path = path.replace(/\//g, "\\")
          return isAbsolutePath(path) ? path : undefined
        } catch {
          return undefined
        }
      }
      return isAbsolutePath(href) ? href : undefined
    }

    const pathAtPoint = (event: MouseEvent): string | undefined => {
      const selection = window.getSelection()?.toString().trim()
      if (selection) {
        const candidate = cleanToken(selection)
        if (isAbsolutePath(candidate)) return candidate
      }

      const doc = document as Document & { caretRangeFromPoint?: (x: number, y: number) => Range | null }
      const range = doc.caretRangeFromPoint?.(event.clientX, event.clientY)
      const node = range?.startContainer
      if (!node || node.nodeType !== Node.TEXT_NODE) return undefined

      const text = node.textContent ?? ""
      const offset = range?.startOffset ?? 0
      const isSeparator = (char: string) => /[\s"'`<>|]/.test(char)
      let start = offset
      let end = offset
      while (start > 0 && !isSeparator(text[start - 1])) start--
      while (end < text.length && !isSeparator(text[end])) end++

      const candidate = cleanToken(text.slice(start, end))
      return isAbsolutePath(candidate) ? candidate : undefined
    }

    const resolvePathAt = (event: MouseEvent): string | undefined => {
      const target = event.target
      if (target instanceof Element) {
        const fromHref = pathFromHref(target.closest("a")?.getAttribute("href") ?? null)
        if (fromHref) return fromHref
      }
      return pathAtPoint(event)
    }

    const folderOf = (path: string) => {
      const normalized = path.replace(/[\\/]+$/, "")
      const name = normalized.split(/[\\/]/).pop() ?? ""
      if (!/\.[a-zA-Z0-9]{1,10}$/.test(name)) return normalized
      const index = Math.max(normalized.lastIndexOf("\\"), normalized.lastIndexOf("/"))
      return index > 0 ? normalized.slice(0, index) : normalized
    }

    const openPathFolder = async (path: string) => {
      const folder = folderOf(path)
      if (ctx.desktop) await ctx.desktop.launch(folder)
      else await ctx.system.copy(folder)
    }

    const revealPath = async (path: string) => {
      if (ctx.desktop && (await ctx.desktop.reveal(path))) return
      await ctx.system.copy(path)
    }

    const [fileMenu, setFileMenu] = createSignal<{ x: number; y: number; path: string } | null>(null)

    const onContextMenu = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      if (target.closest("#opencodeex-dock, #opencodeex-peek, #opencodeex-menu")) return

      const path = resolvePathAt(event)
      if (!path) return

      event.preventDefault()
      event.stopPropagation()
      setFileMenu({
        x: Math.min(event.clientX, window.innerWidth - 250),
        y: Math.min(event.clientY, window.innerHeight - 170),
        path,
      })
    }

    function ProjectList() {
      const [projects, setProjects] = createSignal<readonly ProjectInfo[]>()
      const [error, setError] = createSignal<string>()

      const load = () => {
        setError(undefined)
        setProjects(undefined)
        void ctx.client.project
          .list()
          .then((list) => {
            const seen = new Map<string, ProjectInfo>()
            for (const project of list as readonly ProjectInfo[]) {
              const key = project.canonical.replace(/[\\/]+$/, "").toLowerCase()
              if (!seen.has(key)) seen.set(key, project)
            }
            setProjects([...seen.values()])
          })
          .catch((err: unknown) => setError(err instanceof Error ? err.message : String(err)))
      }

      onMount(load)

      const [menu, setMenu] = createSignal<{ x: number; y: number; project: ProjectInfo } | null>(null)

      const openContext = (event: MouseEvent, project: ProjectInfo) => {
        event.preventDefault()
        event.stopPropagation()
        const x = Math.min(event.clientX, window.innerWidth - 220)
        const y = Math.min(event.clientY, window.innerHeight - 150)
        setMenu({ x, y, project })
      }

      const closeMenu = () => setMenu(null)

      onMount(() => {
        const onKey = (event: KeyboardEvent) => {
          if (event.key === "Escape") closeMenu()
        }
        window.addEventListener("keydown", onKey)
        onCleanup(() => window.removeEventListener("keydown", onKey))
      })

      const same = (project: ProjectInfo) => {
        const dir = ctx.sessions.current()?.directory
        if (!dir) return false
        return dir.replace(/[\\/]+$/, "").toLowerCase() === project.canonical.replace(/[\\/]+$/, "").toLowerCase()
      }

      return (
        <>
          <div class="opencodeex-head">
            <span class="opencodeex-title">{ctx.t("title")}</span>
            <div style={{ display: "flex", gap: "2px" }}>
              <Show when={hidden().length > 0}>
                <ui.Menu
                  label={ctx.t("hidden")}
                  trigger="icon"
                  icon="outline-eye-slash"
                  placement="bottom-end"
                  items={hidden().map((key) => ({
                    label: basename(key),
                    icon: "arrow-undo-down" as const,
                    onSelect: () => restoreProject(key),
                  }))}
                />
              </Show>
              <ui.IconButton
                icon="plus"
                label={ctx.t("add")}
                size="small"
                onClick={() => ctx.layout.project(builtinServer(), ctx.t("title"))}
              />
              <ui.IconButton icon="refresh" label={ctx.t("refresh")} size="small" onClick={load} />
              <ui.IconButton
                icon="chevron-left"
                label={ctx.t("collapse")}
                size="small"
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
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
              {(items) => {
                const shown = () => items().filter((project) => !hiddenSet().has(pathKey(project)))
                return (
                  <Show
                    when={shown().length > 0}
                    fallback={
                      <p class="opencodeex-empty">{items().length > 0 ? ctx.t("allHidden") : ctx.t("empty")}</p>
                    }
                  >
                    <ul class="opencodeex-list">
                      <For each={shown()}>
                        {(project) => (
                          <li class="opencodeex-row" onContextMenu={(event) => openContext(event, project)}>
                            <button
                              type="button"
                              class="opencodeex-item"
                              data-current={same(project)}
                              title={same(project) ? ctx.t("current") : project.canonical}
                              onClick={() => void openProject(project)}
                            >
                              <span
                                class="opencodeex-badge"
                                style={badgeColor(project) ? { "background-color": badgeColor(project) } : undefined}
                              >
                                {badgeText(project)}
                              </span>
                              <span class="opencodeex-name">{label(project)}</span>
                            </button>
                            <button
                              type="button"
                              class="opencodeex-hide"
                              title={ctx.t("hide")}
                              onClick={(event) => {
                                event.stopPropagation()
                                hideProject(project)
                              }}
                            >
                              <ui.Icon name="xmark-small" size="small" />
                            </button>
                          </li>
                        )}
                      </For>
                    </ul>
                  </Show>
                )
              }}
            </Show>
          </Show>
          <Show when={menu()}>
            {(current) => (
              <>
                <div
                  class="opencodeex-backdrop"
                  onMouseDown={closeMenu}
                  onContextMenu={(event) => {
                    event.preventDefault()
                    closeMenu()
                  }}
                />
                <div
                  class="opencodeex-context"
                  style={{ left: `${current().x}px`, top: `${current().y}px` }}
                >
                  <button
                    type="button"
                    class="opencodeex-context-item"
                    onClick={() => {
                      void openFolder(current().project)
                      closeMenu()
                    }}
                  >
                    <ui.Icon name="folder" size="small" />
                    <span>{ctx.t("openFolder")}</span>
                  </button>
                  <button
                    type="button"
                    class="opencodeex-context-item"
                    onClick={() => {
                      void revealFolder(current().project)
                      closeMenu()
                    }}
                  >
                    <ui.Icon name="select-element" size="small" />
                    <span>{ctx.t("revealFolder")}</span>
                  </button>
                  <button
                    type="button"
                    class="opencodeex-context-item"
                    onClick={() => {
                      void copyPath(current().project)
                      closeMenu()
                    }}
                  >
                    <ui.Icon name="copy" size="small" />
                    <span>{ctx.t("copyPath")}</span>
                  </button>
                </div>
              </>
            )}
          </Show>
        </>
      )
    }

    // 独立挂载点：不受 OpenCode 布局 contain/transform 影响
    const readWidth = () => {
      const value = Number(localStorage.getItem(WIDTH_KEY))
      return Number.isFinite(value) && value >= 220 && value <= 560 ? value : DOCK_WIDTH
    }

    const [width, setWidth] = createSignal<number>(readWidth())

    const applyWidth = (value: number) => {
      document.body.style.setProperty("--opencodeex-width", `${value}px`)
    }

    let resizing = false
    const startResize = (event: PointerEvent) => {
      event.preventDefault()
      resizing = true
      ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
    }
    const moveResize = (event: PointerEvent) => {
      if (!resizing) return
      const next = Math.min(560, Math.max(220, event.clientX))
      applyWidth(next)
      setWidth(next)
    }
    const endResize = (event: PointerEvent) => {
      if (!resizing) return
      resizing = false
      localStorage.setItem(WIDTH_KEY, String(width()))
      ;(event.currentTarget as HTMLElement).releasePointerCapture?.(event.pointerId)
    }
    const resetWidth = () => {
      applyWidth(DOCK_WIDTH)
      setWidth(DOCK_WIDTH)
      localStorage.setItem(WIDTH_KEY, String(DOCK_WIDTH))
    }

    const host = document.createElement("div")
    host.id = "opencodeex-dock"
    const dispose = render(
      () => (
        <div class="opencodeex-panel">
          <ProjectList />
          <div
            class="opencodeex-resize"
            title={ctx.t("resize")}
            onPointerDown={startResize}
            onPointerMove={moveResize}
            onPointerUp={endResize}
            onPointerCancel={endResize}
            onDblClick={resetWidth}
          />
        </div>
      ),
      host,
    )

    const peek = document.createElement("div")
    peek.id = "opencodeex-peek"
    const disposePeek = render(
      () => (
        <button type="button" class="opencodeex-peek" title={ctx.t("expand")} onClick={() => setOpen(true)}>
          <ui.Icon name="chevron-right" size="small" />
        </button>
      ),
      peek,
    )

    const fileMenuHost = document.createElement("div")
    fileMenuHost.id = "opencodeex-menu"
    const disposeFileMenu = render(
      () => (
        <Show when={fileMenu()}>
          {(current) => (
            <>
              <div
                class="opencodeex-backdrop"
                onMouseDown={() => setFileMenu(null)}
                onContextMenu={(event) => {
                  event.preventDefault()
                  setFileMenu(null)
                }}
              />
              <div class="opencodeex-context" style={{ left: `${current().x}px`, top: `${current().y}px` }}>
                <div class="opencodeex-context-path" title={current().path}>
                  {current().path}
                </div>
                <button
                  type="button"
                  class="opencodeex-context-item"
                  onClick={() => {
                    void openPathFolder(current().path)
                    setFileMenu(null)
                  }}
                >
                  <ui.Icon name="folder" size="small" />
                  <span>{ctx.t("openFolder")}</span>
                </button>
                <button
                  type="button"
                  class="opencodeex-context-item"
                  onClick={() => {
                    void revealPath(current().path)
                    setFileMenu(null)
                  }}
                >
                  <ui.Icon name="select-element" size="small" />
                  <span>{ctx.t("revealFolder")}</span>
                </button>
                <button
                  type="button"
                  class="opencodeex-context-item"
                  onClick={() => {
                    void ctx.system.copy(current().path)
                    setFileMenu(null)
                  }}
                >
                  <ui.Icon name="copy" size="small" />
                  <span>{ctx.t("copyPath")}</span>
                </button>
              </div>
            </>
          )}
        </Show>
      ),
      fileMenuHost,
    )

    const place = () => {
      const main = document.querySelector("main")
      host.style.top = `${main ? Math.round(main.getBoundingClientRect().top) : 44}px`
    }

    const apply = () => {
      const shown = open()
      host.style.display = shown ? "flex" : "none"
      peek.style.display = shown ? "none" : "block"
      document.body.classList.toggle("opencodeex-docked", shown)
      localStorage.setItem(STORAGE_KEY, shown ? "1" : "0")
      if (shown) place()
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFileMenu(null)
    }

    onMount(() => {
      applyWidth(width())
      document.body.appendChild(host)
      document.body.appendChild(peek)
      document.body.appendChild(fileMenuHost)
      apply()
      window.addEventListener("resize", place)
      document.addEventListener("contextmenu", onContextMenu, true)
      document.addEventListener("keydown", onEscape)
    })

    createEffect(() => applyWidth(width()))
    createEffect(apply)

    /** 清理早期版本在右侧 side 区域留下的面板标签 */
    const legacyClosed = new Set<string>()
    createEffect(() => {
      const session = ctx.sessions.current()
      if (!session || legacyClosed.has(session.key)) return
      legacyClosed.add(session.key)
      try {
        ctx.layout.close(`${ctx.id}:projects`, session)
      } catch {
        // 标签不存在时忽略
      }
    })

    onCleanup(() => {
      window.removeEventListener("resize", place)
      document.removeEventListener("contextmenu", onContextMenu, true)
      document.removeEventListener("keydown", onEscape)
      document.body.classList.remove("opencodeex-docked")
      document.body.style.removeProperty("--opencodeex-width")
      dispose()
      disposePeek()
      disposeFileMenu()
      host.remove()
      peek.remove()
      fileMenuHost.remove()
    })

    const toggle = () => setOpen((v) => !v)

    ctx.add(
      TitlebarItem,
      (): TitlebarItem => ({
        id: "projects",
        label: ctx.t("button"),
        title: ctx.t("title"),
        icon: "layout-left",
        pressed: open(),
        run: toggle,
      }),
    )

    ctx.add(
      Command,
      (): Command => ({
        id: "projects",
        title: ctx.t("command"),
        description: ctx.t("description"),
        keywords: "project workspace dock sidebar 项目 侧边栏",
        section: "navigation",
        bind: "mod+alt+p",
        run: toggle,
      }),
    )

    ctx.add(Slot, {
      at: "session.location.menu",
      order: -10,
      render: (input) => (
        <Show when={input.shown}>
          <button type="button" class="opencodeex-menu-item" onClick={toggle}>
            <ui.Icon name="layout-left" size="small" />
            <span>{ctx.t("title")}</span>
          </button>
        </Show>
      ),
    })
  },
})
