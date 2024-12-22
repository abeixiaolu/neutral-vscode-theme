import { Alpha, Color, Semantic, Theme, Status } from "./color.js";

export function genEditorColors({
  semantic,
  alpha,
  colors,
  theme,
  status,
}: {
  semantic: Semantic;
  alpha: Alpha;
  colors: Color;
  theme: Theme;
  status: Status;
}) {
  return {
    // 基础界面颜色
    foreground: semantic.foreground,
    focusBorder: "#ffffff00",
    "widget.shadow": semantic.shadow,
    "scrollbar.shadow": semantic.shadow,
    "selection.background": alpha.selection,
    "sash.hoverBorder": theme.blue,
    descriptionForeground: "#666",
    // 链接
    "textLink.foreground": semantic.link,

    // 侧边栏
    "sideBar.background": semantic.background,
    "sideBar.foreground": semantic.foreground,
    "sideBar.border": semantic.border,
    "sideBarSectionHeader.background": "#00000000",
    "sideBarSectionHeader.foreground": semantic.foreground,
    "sideBarSectionHeader.border": `${colors.gray[1]}33`,
    // "sideBarTitle.foreground": "#f00",
    // "sideBar.dropBackground": "#f00",

    // 列表样式
    "list.foreground": semantic.foreground,
    "list.focusForeground": semantic.foreground,
    "list.focusBackground": semantic.listHoverBackground,
    "list.hoverBackground": semantic.listHoverBackground,
    "list.inactiveSelectionBackground": semantic.listHoverBackground,
    "list.inactiveSelectionForeground": semantic.listHoverForeground,
    "list.activeSelectionBackground": semantic.listHoverBackground,
    "list.activeSelectionForeground": semantic.primary,
    "list.highlightForeground": semantic.primary,

    // 列表过滤器
    "listFilterWidget.background": "#653723",
    "listFilterWidget.outline": "#00000000",
    "listFilterWidget.noMatchesOutline": "#be10",

    // 状态栏
    "statusBar.foreground": semantic.foreground,
    "statusBar.background": semantic.background,
    "statusBarItem.hoverBackground": alpha.white10,
    "statusBar.debuggingBackground": "#cc6633",
    "statusBar.debuggingForeground": semantic.foreground,
    "statusBar.noFolderBackground": "#68217a",
    "statusBar.noFolderForeground": semantic.foreground,
    "statusBarItem.remoteBackground": semantic.buttonBackground,
    "statusBarItem.remoteForeground": semantic.buttonForeground,
    "statusBarItem.activeBackground": "#FFFFFF25",

    // 标题栏
    "titleBar.activeBackground": semantic.background,
    "titleBar.activeForeground": semantic.foreground,
    "titleBar.inactiveBackground": `${semantic.background}99`,
    "titleBar.inactiveForeground": semantic.inactiveForeground,
    "titleBar.border": "#00000000",

    // 菜单栏
    // "menubar.selectionForeground": colors.gray[1],
    // "menubar.selectionBackground": alpha.white10,
    // "menu.foreground": colors.gray[1],
    // "menu.background": semantic.background,
    // "menu.selectionForeground": colors.white,
    // "menu.selectionBackground": "#094771",
    // "menu.selectionBorder": "#00000000",
    // "menu.separatorBackground": colors.gray[2],
    // "menu.border": "#00000085",

    // 按钮
    "button.background": semantic.buttonBackground,
    "button.foreground": semantic.buttonForeground,
    "button.hoverBackground": semantic.buttonHoverBackground,
    "button.secondaryForeground": semantic.foreground,
    "button.secondaryBackground": semantic.widgetBackground,
    "button.secondaryHoverBackground": semantic.activeBackground,

    // 输入框 和 下拉框
    "input.background": semantic.widgetBackground,
    "input.border": semantic.border,
    "input.focusBorder": "#f00",
    "input.foreground": semantic.foreground,
    "inputOption.activeBackground": semantic.highlight2,
    "inputOption.activeBorder": "#00000000",
    "inputOption.activeForeground": semantic.foreground,
    "input.placeholderForeground": semantic.inactiveForeground,
    "dropdown.border": semantic.border,
    "dropdown.background": semantic.widgetBackground,
    "dropdown.listBackground": semantic.widgetBackground,

    // 编辑器
    "editor.background": semantic.editorBackground,
    "editor.foreground": semantic.foreground,
    "editorLineNumber.foreground": semantic.comment,
    "editorCursor.foreground": semantic.cursor,
    "editorCursor.background": colors.black,
    "editorStickyScroll.shadow": semantic.shadow,
    "editorStickyScroll.background": semantic.scrollbar,
    "editorStickyScrollHover.background": semantic.scrollbar,

    // 编辑器选择与高亮
    "editor.selectionBackground": semantic.selection,
    "editor.inactiveSelectionBackground": semantic.selection,
    "editor.selectionHighlightBackground": semantic.highlight,
    "editor.selectionHighlightBorder": "#00000000",
    "editor.findMatchBackground": semantic.highlight2,
    "editor.findMatchBorder": "#00000000",
    "editor.findMatchHighlightBackground": semantic.highlight,
    "editor.findMatchHighlightBorder": "#00000000",
    "editor.findRangeHighlightBackground": semantic.highlight,
    "editor.findRangeHighlightBorder": "#00000000",
    "editor.hoverHighlightBackground": semantic.highlight,
    "editor.wordHighlightStrongBackground": semantic.highlight,
    "editor.wordHighlightBackground": semantic.highlight,

    // 编辑器行相关
    "editor.lineHighlightBackground": semantic.highlight,
    "editor.lineHighlightBorder": "#00000000",
    "editorLineNumber.activeForeground": semantic.foreground,
    "editorWhitespace.foreground": semantic.highlight,

    // 编辑器缩进和标尺
    "editorIndentGuide.background1": semantic.highlight,
    "editorIndentGuide.activeBackground1": semantic.highlight2,
    "editorRuler.foreground": semantic.highlight2,

    // 编辑器括号匹配和折叠
    "editorBracketMatch.background": semantic.highlight2,
    "editorBracketMatch.border": theme.blue,
    "editor.foldBackground": semantic.highlight,

    // 编辑器错误和警告
    "editorError.foreground": status.error,
    "editorError.background": `${status.error}33`,
    "editorError.border": `#00000000`,
    "editorWarning.foreground": status.warning,
    "editorWarning.background": `${status.warning}33`,
    "editorWarning.border": `#00000000`,
    "editorInfo.foreground": status.info,
    "editorInfo.background": `${status.info}33`,
    "editorInfo.border": `#00000000`,

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
    "diffEditor.insertedTextBackground": `${status.success}15`,
    "diffEditor.removedTextBackground": `${status.error}88`,
    "diffEditor.border": "#00000000",

    // 面板
    "panel.background": semantic.background,
    "panel.border": semantic.border,
    "panelTitle.activeBorder": semantic.primary,
    "panelTitle.activeForeground": semantic.foreground,
    "panelTitle.inactiveForeground": `${semantic.inactiveForeground}`,
    "panelSection.border": semantic.border,

    // 徽章
    "badge.background": semantic.buttonBackground,
    "badge.foreground": semantic.buttonForeground,

    // 终端
    "terminal.foreground": semantic.foreground,
    "terminal.selectionBackground": semantic.selection,
    "terminal.border": "#80808059",
    "terminalCursor.background": semantic.primary,
    "terminalCursor.foreground": semantic.foreground,

    // 终端 ANSI 颜色
    "terminal.ansiBrightBlue": colors.blue[0],
    "terminal.ansiBrightCyan": colors.cyan[0],
    "terminal.ansiBrightGreen": colors.green[0],
    "terminal.ansiBrightMagenta": colors.magenta[0],
    "terminal.ansiBrightRed": colors.red[0],
    "terminal.ansiBrightYellow": colors.yellow[0],
    "terminal.ansiCyan": colors.cyan[5],
    "terminal.ansiBlue": colors.blue[5],
    "terminal.ansiGreen": colors.green[5],
    "terminal.ansiMagenta": colors.magenta[5],
    "terminal.ansiRed": colors.red[5],
    "terminal.ansiYellow": colors.yellow[5],
    "terminal.ansiBrightWhite": "#e5e5e5",
    "terminal.ansiWhite": "#e5e5e5",
    "terminal.ansiBrightBlack": "#666666",
    "terminal.ansiBlack": "#333",

    // 面包屑导航
    "breadcrumb.background": semantic.background,
    "breadcrumb.foreground": semantic.inactiveForeground,
    "breadcrumb.focusForeground": semantic.foreground,
    "breadcrumb.activeSelectionForeground": semantic.foreground,

    // 标签页
    "editorGroupHeader.tabsBackground": semantic.background,
    "tab.activeForeground": semantic.foreground,
    "tab.border": "#00000000",
    "tab.activeBackground": semantic.background,
    "tab.activeBorder": semantic.primary,
    "tab.inactiveBackground": semantic.background,
    "tab.inactiveForeground": `${semantic.inactiveForeground}`,

    // 编辑器概览标尺
    "editorOverviewRuler.border": semantic.border,
    // 滚动条
    "scrollbarSlider.background": semantic.scrollbar,
    "scrollbarSlider.hoverBackground": semantic.scrollbar,
    "scrollbarSlider.activeBackground": semantic.scrollbar,
    // 进度条
    "progressBar.background": theme.blue,

    // 窗口小部件
    "editorWidget.foreground": semantic.inactiveForeground,
    "editorWidget.background": semantic.background,
    "editorWidget.resizeBorder": "#5F5F5F",

    // 选择器组
    "pickerGroup.border": "#3f3f46",
    "pickerGroup.foreground": semantic.link,

    // 调试工具栏
    "debugToolBar.background": semantic.background,
    "debugToolBar.border": "#474747",

    // 通知
    "notifications.foreground": semantic.foreground,
    "notifications.background": semantic.background,
    "notificationToast.border": "#474747",
    "notificationsErrorIcon.foreground": status.error,
    "notificationsWarningIcon.foreground": status.warning,
    "notificationsInfoIcon.foreground": status.info,
    "notificationCenter.border": "#474747",
    "notificationCenterHeader.foreground": semantic.foreground,
    "notificationCenterHeader.background": semantic.background,
    "notifications.border": semantic.border,
    // 活动栏 (左侧图标栏)
    "activityBar.foreground": semantic.foreground,
    "activityBar.background": semantic.background,
    "activityBar.inactiveForeground": semantic.inactiveForeground,
    "activityBarBadge.foreground": semantic.buttonForeground,
    "activityBarBadge.background": semantic.buttonBackground,

    // Git 装饰器
    "gitDecoration.addedResourceForeground": theme.green,
    "gitDecoration.conflictingResourceForeground": theme.magenta,
    "gitDecoration.deletedResourceForeground": theme.red,
    "gitDecoration.ignoredResourceForeground": "#8c8c8c",
    "gitDecoration.modifiedResourceForeground": theme.yellow,
    "gitDecoration.stageDeletedResourceForeground": theme.red,
    "gitDecoration.stageModifiedResourceForeground": theme.yellow,
    "gitDecoration.submoduleResourceForeground": theme.blue,
    "gitDecoration.untrackedResourceForeground": theme.green,

    // 其他配置
    "settings.headerForeground": semantic.foreground,
    "settings.focusedRowBackground": "#12121200", // 当前选中行的背景色
    "settings.rowHoverBackground": "#12121200", // 鼠标悬停时的背景色
    "settings.modifiedItemIndicator": semantic.primary,
    "walkThrough.embeddedEditorBackground": "#00000050",
  };
}
