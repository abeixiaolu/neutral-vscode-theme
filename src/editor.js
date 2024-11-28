import { base, theme, semantic, status, ui, alpha } from "./color.js";

export function genEditorColors(semantic) {
  return {
    // 基础界面颜色
    foreground: semantic.foreground,
    focusBorder: ui.focusBorder,
    "selection.background": alpha.selection,
    "scrollbar.shadow": base.gray[900],

    // 活动栏 (左侧图标栏)
    "activityBar.foreground": base.white,
    "activityBar.background": semantic.background,
    "activityBar.inactiveForeground": `${semantic.inactiveForeground}`,
    "activityBarBadge.foreground": base.white,
    "activityBarBadge.background": "#007acc",

    // 侧边栏
    "sideBar.background": semantic.background,
    "sideBar.foreground": base.gray[200],
    "sideBarSectionHeader.background": "#00000000",
    "sideBarSectionHeader.foreground": base.gray[200],
    "sideBarSectionHeader.border": `${base.gray[200]}33`,
    "sideBarTitle.foreground": base.gray[300],
    "sideBar.dropBackground": "#383b3d",

    // 列表样式
    "list.inactiveSelectionBackground": "#37373d",
    "list.inactiveSelectionForeground": base.gray[200],
    "list.hoverBackground": "#2a2d2e",
    "list.hoverForeground": base.gray[200],
    "list.activeSelectionBackground": "#094771",
    "list.activeSelectionForeground": base.white,
    "tree.indentGuidesStroke": "#585858",
    "list.dropBackground": "#383b3d",
    "list.highlightForeground": "#0097fb",
    "list.focusBackground": "#062f4a",
    "list.focusForeground": base.gray[200],

    // 列表过滤器
    "listFilterWidget.background": "#653723",
    "listFilterWidget.outline": "#00000000",
    "listFilterWidget.noMatchesOutline": "#be1100",

    // 状态栏
    "statusBar.foreground": base.white,
    "statusBar.background": semantic.background,
    "statusBarItem.hoverBackground": alpha.white10,
    "statusBar.debuggingBackground": "#cc6633",
    "statusBar.debuggingForeground": base.white,
    "statusBar.noFolderBackground": "#68217a",
    "statusBar.noFolderForeground": base.white,
    "statusBarItem.remoteBackground": "#16825d",
    "statusBarItem.remoteForeground": base.white,
    "statusBarItem.activeBackground": "#FFFFFF25",

    // 标题栏
    "titleBar.activeBackground": base.gray[800],
    "titleBar.activeForeground": base.gray[200],
    "titleBar.inactiveBackground": `${base.gray[800]}99`,
    "titleBar.inactiveForeground": `${semantic.inactiveForeground}`,
    "titleBar.border": "#00000000",

    // 菜单栏
    "menubar.selectionForeground": base.gray[200],
    "menubar.selectionBackground": alpha.white10,
    "menu.foreground": base.gray[200],
    "menu.background": semantic.background,
    "menu.selectionForeground": base.white,
    "menu.selectionBackground": "#094771",
    "menu.selectionBorder": "#00000000",
    "menu.separatorBackground": base.gray[300],
    "menu.border": "#00000085",

    // 按钮
    "button.background": base.gray[400],
    "button.foreground": base.black,
    "button.hoverBackground": "#e1e1e1",
    "button.secondaryForeground": base.white,
    "button.secondaryBackground": "#3a3d41",
    "button.secondaryHoverBackground": "#45494e",

    // 输入框
    "input.background": ui.widgetBackground,
    "input.border": "#00000000",
    "input.foreground": base.gray[200],
    "inputOption.activeBackground": "#007fd466",
    "inputOption.activeBorder": "#007acc00",
    "inputOption.activeForeground": base.white,
    "input.placeholderForeground": base.gray[400],

    // 链接
    "textLink.foreground": semantic.link,

    // 编辑器
    "editor.background": semantic.background,
    "editor.foreground": semantic.foreground,
    "editorLineNumber.foreground": `${semantic.comment}66`,
    "editorCursor.foreground": semantic.cursor,
    "editorCursor.background": base.black,
    "editorStickyScroll.shadow": `${semantic.scrollbar}00`,
    "editorStickyScroll.background": semantic.scrollbar,

    // 编辑器选择与高亮
    "editor.selectionBackground": semantic.selection,
    "editor.inactiveSelectionBackground": semantic.selection,
    "editor.selectionHighlightBackground": "#add6ff26",
    "editor.selectionHighlightBorder": "#495F77",
    "editor.findMatchBackground": "#515c6a",
    "editor.findMatchBorder": "#74879f",
    "editor.findMatchHighlightBackground": "#ea5c0055",
    "editor.findMatchHighlightBorder": `${base.white}00`,
    "editor.findRangeHighlightBackground": "#3a3d4166",
    "editor.findRangeHighlightBorder": `${base.white}00`,
    "editor.hoverHighlightBackground": `${semantic.highlight}`,
    "editor.wordHighlightStrongBackground": "#004972b8",
    "editor.wordHighlightBackground": "#575757b8",

    // 编辑器行相关
    "editor.lineHighlightBackground": "#ffffff10",
    "editor.lineHighlightBorder": "#ffffff00",
    "editorLineNumber.activeForeground": semantic.foreground,
    "editorWhitespace.foreground": "#e3e4e229",

    // 编辑器缩进和标尺
    "editorIndentGuide.background1": `${semantic.comment}33`,
    "editorIndentGuide.activeBackground1": semantic.comment,
    "editorRuler.foreground": semantic.comment,

    // 编辑器括号匹配和折叠
    "editorBracketMatch.background": `${semantic.comment}66`,
    "editorBracketMatch.border": theme.blue,
    "editor.foldBackground": `${semantic.comment}66`,

    // 编辑器概览标尺
    "editorOverviewRuler.background": "#cb212100",
    "editorOverviewRuler.border": semantic.border,

    // 编辑器错误和警告
    "editorError.foreground": status.error,
    "editorError.background": "#ff0c0000",
    "editorError.border": `${base.white}00`,
    "editorWarning.foreground": status.warning,
    "editorWarning.background": "#A9904000",
    "editorWarning.border": `${base.white}00`,
    "editorInfo.foreground": status.info,
    "editorInfo.background": "#4490BF00",
    "editorInfo.border": "#4490BF00",

    // 编辑器槽（左侧）
    "editorGutter.background": semantic.background,
    "editorGutter.modifiedBackground": status.modified,
    "editorGutter.addedBackground": status.success,
    "editorGutter.deletedBackground": status.deleted,
    "editorGutter.foldingControlForeground": semantic.foreground,
    "editorGutter.commentRangeForeground": semantic.foreground,

    // 代码镜头
    "editorCodeLens.foreground": semantic.comment,

    // 差异编辑器
    "diffEditor.insertedTextBackground": "#9bb95533",
    "diffEditor.removedTextBackground": "#ff000033",
    "diffEditor.border": "#444444",

    // 面板
    "panel.background": semantic.background,
    "panel.border": semantic.border,
    "panelTitle.activeBorder": base.gray[100],
    "panelTitle.activeForeground": base.gray[100],
    "panelTitle.inactiveForeground": `${semantic.inactiveForeground}`,
    "panelSection.border": semantic.border,

    // 徽章
    "badge.background": base.gray[700],
    "badge.foreground": base.white,

    // 终端
    "terminal.foreground": base.gray[200],
    "terminal.selectionBackground": `${base.white}`,
    "terminal.border": "#80808059",
    "terminalCursor.background": "#0087FF",
    "terminalCursor.foreground": base.white,

    // 终端 ANSI 颜色
    "terminal.ansiBrightBlack": "#666666",
    "terminal.ansiBrightBlue": theme.blue,
    "terminal.ansiBrightCyan": theme.blue,
    "terminal.ansiBrightGreen": theme.green,
    "terminal.ansiBrightMagenta": theme.magenta,
    "terminal.ansiBrightRed": theme.red,
    "terminal.ansiBrightWhite": "#e5e5e5",
    "terminal.ansiBrightYellow": theme.yellow,
    "terminal.ansiCyan": theme.blue,
    "terminal.ansiBlue": theme.blue,
    "terminal.ansiBlack": base.black,
    "terminal.ansiGreen": theme.green,
    "terminal.ansiMagenta": theme.magenta,
    "terminal.ansiRed": theme.red,
    "terminal.ansiWhite": "#e5e5e5",
    "terminal.ansiYellow": theme.yellow,
    "terminal.selectionBackground": semantic.selection,

    // 面包屑导航
    "breadcrumb.background": semantic.background,
    "breadcrumb.foreground": `${base.gray[600]}`,
    "breadcrumb.focusForeground": "#e0e0e0",
    "breadcrumb.activeSelectionForeground": "#e0e0e0",

    // 标签页
    "editorGroupHeader.tabsBackground": semantic.background,
    "tab.activeForeground": base.white,
    "tab.border": "#252526",
    "tab.activeBackground": ui.activeBackground,
    "tab.activeBorder": "#00000000",
    "tab.activeBorderTop": "#00000000",
    "tab.inactiveBackground": semantic.background,
    "tab.inactiveForeground": `${semantic.inactiveForeground}`,

    // 滚动条
    "scrollbarSlider.background": `${semantic.scrollbar}`,
    "scrollbarSlider.hoverBackground": `${semantic.scrollbar}`,
    "scrollbarSlider.activeBackground": `${semantic.scrollbar}`,

    // 进度条
    "progressBar.background": theme.blue,

    // 窗口小部件
    "widget.shadow": ui.shadow,
    "editorWidget.foreground": base.gray[200],
    "editorWidget.background": semantic.background,
    "editorWidget.resizeBorder": "#5F5F5F",

    // 选择器组
    "pickerGroup.border": "#3f3f46",
    "pickerGroup.foreground": semantic.link,

    // 调试工具栏
    "debugToolBar.background": semantic.background,
    "debugToolBar.border": "#474747",

    // 通知
    "notifications.foreground": base.gray[200],
    "notifications.background": semantic.background,
    "notificationToast.border": "#474747",
    "notificationsErrorIcon.foreground": status.error,
    "notificationsWarningIcon.foreground": status.warning,
    "notificationsInfoIcon.foreground": status.info,
    "notificationCenter.border": "#474747",
    "notificationCenterHeader.foreground": base.gray[200],
    "notificationCenterHeader.background": "#303031",
    "notifications.border": "#303031",

    // Git 装饰器
    "gitDecoration.addedResourceForeground": "#81b88b",
    "gitDecoration.conflictingResourceForeground": "#6c6cc4",
    "gitDecoration.deletedResourceForeground": "#c74e39",
    "gitDecoration.ignoredResourceForeground": "#8c8c8c",
    "gitDecoration.modifiedResourceForeground": "#e2c08d",
    "gitDecoration.stageDeletedResourceForeground": "#c74e39",
    "gitDecoration.stageModifiedResourceForeground": "#e2c08d",
    "gitDecoration.submoduleResourceForeground": "#8db9e2",
    "gitDecoration.untrackedResourceForeground": "#73c991",

    // 其他配置
    "settings.headerForeground": semantic.foreground,
    "settings.focusedRowBackground": "#ffffff07",
    "walkThrough.embeddedEditorBackground": "#00000050",
  };
}
