import type { Semantic, Theme } from './color.js'

export default function genEditors({
  semantic,
  theme,
}: {
  semantic: Semantic
  theme: Theme
}) {
  return {
    // 状态栏缩放按钮（放大镜图标）的背景色
    'statusBarItem.prominentBackground': '#5552',
    // 基础界面颜色
    'editorGhostText.foreground': semantic.ghostForeground,
    // 'editorGhostText.border': semantic.ghostForeground,
    'foreground': semantic.foreground,
    'focusBorder': '#ffffff00',
    'widget.shadow': semantic.shadow,
    'scrollbar.shadow': semantic.shadow,
    'selection.background': semantic.selection,
    'sash.hoverBorder': semantic.primary,
    'descriptionForeground': '#777',
    // 链接
    'textLink.foreground': semantic.primary,
    'textLink.activeForeground': semantic.primaryHover,

    // 侧边栏
    'sideBar.background': semantic.background,
    'sideBar.foreground': semantic.foreground,
    'sideBar.border': semantic.border,
    'sideBarSectionHeader.background': '#00000000',
    'sideBarSectionHeader.foreground': semantic.foreground,
    'sideBarSectionHeader.border': semantic.border,
    // "sideBarTitle.foreground": "#f00",
    // "sideBar.dropBackground": "#f00",

    // 列表样式
    'list.focusForeground': semantic.foreground,
    'list.focusBackground': semantic.listHoverBackground,
    'list.hoverBackground': semantic.listHoverBackground,
    'list.inactiveSelectionBackground': semantic.listHoverBackground,
    'list.inactiveSelectionForeground': semantic.primary,
    'list.activeSelectionBackground': semantic.listHoverBackground,
    'list.activeSelectionForeground': semantic.primary,
    'list.highlightForeground': semantic.primary,

    // 列表过滤器
    'listFilterWidget.background': '#653723',
    'listFilterWidget.outline': '#00000000',
    'listFilterWidget.noMatchesOutline': '#be10',

    // 状态栏
    'statusBar.foreground': semantic.foreground,
    'statusBar.background': semantic.background,
    'statusBarItem.hoverBackground': semantic.selection,
    'statusBar.debuggingBackground': '#cc6633',
    'statusBar.debuggingForeground': semantic.foreground,
    'statusBar.noFolderBackground': '#68217a',
    'statusBar.noFolderForeground': semantic.foreground,
    'statusBarItem.remoteBackground': semantic.primary,
    'statusBarItem.remoteForeground': semantic.buttonForeground,
    'statusBarItem.activeBackground': '#FFFFFF25',

    // 标题栏
    'titleBar.activeBackground': semantic.background,
    'titleBar.activeForeground': semantic.foreground,
    // "titleBar.inactiveBackground": semantic.inactiveBackground,
    // "titleBar.inactiveForeground": semantic.inactiveForeground,
    // "titleBar.border": "#00000000",

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
    'button.background': semantic.primary,
    'button.foreground': semantic.buttonForeground,
    'button.hoverBackground': semantic.primaryHover,
    'button.secondaryForeground': semantic.foreground,
    'button.secondaryBackground': semantic.widgetBackground,
    'button.secondaryHoverBackground': semantic.activeBackground,

    // 输入框 和 下拉框
    'input.background': semantic.widgetBackground,
    'input.border': semantic.border,
    'input.foreground': semantic.foreground,
    'inputOption.activeBackground': semantic.highlight2,
    'inputOption.activeBorder': '#00000000',
    'inputOption.activeForeground': semantic.foreground,
    'input.placeholderForeground': semantic.inactiveForeground,
    'dropdown.border': semantic.border,
    'dropdown.background': semantic.widgetBackground,
    'dropdown.listBackground': semantic.widgetBackground,

    // 编辑器
    'editor.background': semantic.background,
    'editor.foreground': semantic.foreground,
    'editorLineNumber.foreground': semantic.comment,
    'editorCursor.foreground': semantic.cursor,
    // "editorCursor.background": semantic.foreground,
    'editorStickyScroll.shadow': semantic.shadow,
    'editorStickyScroll.background': semantic.scrollBackground,
    'editorStickyScrollHover.background': semantic.scrollBackground,

    // 命令面板
    'quickInput.background': semantic.background,
    'pickerGroup.border': semantic.border,
    'pickerGroup.foreground': semantic.primary,
    'quickInput.foreground': semantic.inactiveForeground,
    'quickInputList.focusBackground': semantic.listHoverBackground,
    'quickInputList.focusForeground': semantic.primary,
    'quickInputList.focusIconForeground': semantic.primary,
    'quickInputTitle.background': semantic.background,

    // peekView
    'peekViewTitle.background': semantic.background,
    'peekViewEditor.background': semantic.background,
    'peekViewResult.background': semantic.background,
    'peekViewResult.selectionBackground': semantic.selection,
    'peekViewResult.matchHighlightBackground': semantic.highlight,
    'peekViewEditor.matchHighlightBackground': semantic.highlight,
    'peekView.border': semantic.primary,

    // 编辑器选择与高亮
    'editor.selectionBackground': semantic.selection,
    'editor.inactiveSelectionBackground': semantic.selection,
    'editor.selectionHighlightBackground': semantic.highlight,
    'editor.selectionHighlightBorder': '#00000000',
    'editor.findMatchBackground': semantic.highlight2,
    'editor.findMatchBorder': '#00000000',
    'editor.findMatchHighlightBackground': semantic.highlight,
    'editor.findMatchHighlightBorder': '#00000000',
    'editor.findRangeHighlightBackground': semantic.highlight,
    'editor.findRangeHighlightBorder': '#00000000',
    'editor.hoverHighlightBackground': semantic.highlight,
    'editor.wordHighlightStrongBackground': semantic.highlight,
    'editor.wordHighlightBackground': semantic.highlight,
    'editor.rangeHighlightBackground': semantic.lineHighlightBackground,

    // 编辑器行相关
    'editor.lineHighlightBackground': semantic.lineHighlightBackground,
    'editor.lineHighlightBorder': '#00000000',
    'editorLineNumber.activeForeground': semantic.foreground,
    'editorWhitespace.foreground': semantic.highlight,

    // 编辑器缩进和标尺
    'editorIndentGuide.background1': semantic.highlight,
    'editorIndentGuide.activeBackground1': semantic.highlight2,
    'editorRuler.foreground': semantic.highlight2,

    // 编辑器括号匹配和折叠
    'editorBracketMatch.background': semantic.highlight2,
    'editorBracketMatch.border': semantic.primary,
    'editor.foldBackground': semantic.highlight,

    // 编辑器错误和警告
    'editorError.foreground': theme.red,
    'editorError.background': `${theme.red}33`,
    'editorError.border': `#00000000`,
    'editorWarning.foreground': theme.orange,
    'editorWarning.background': `${theme.orange}33`,
    'editorWarning.border': `#00000000`,
    'editorInfo.foreground': theme.blue,
    'editorInfo.background': `${theme.blue}33`,
    'editorInfo.border': `#00000000`,

    // 编辑器槽（左侧）
    'editorGutter.background': semantic.background,
    'editorGutter.modifiedBackground': theme.orange,
    'editorGutter.addedBackground': theme.green,
    'editorGutter.deletedBackground': theme.red,
    'editorGutter.foldingControlForeground': semantic.foreground,
    'editorGutter.commentRangeForeground': semantic.foreground,

    // 代码镜头
    'editorCodeLens.foreground': semantic.comment,

    // 差异编辑器
    'diffEditor.insertedTextBackground': `${theme.green}50`,
    'diffEditor.removedTextBackground': `${theme.red}50`,
    'diffEditor.border': '#00000000',

    // 面板
    'panel.background': semantic.background,
    'panel.border': semantic.border,
    'panelTitle.activeBorder': semantic.primary,
    'panelTitle.activeForeground': semantic.foreground,
    'panelTitle.inactiveForeground': `${semantic.inactiveForeground}`,
    'panelSection.border': semantic.border,

    // 徽章
    'badge.background': semantic.primary,
    'badge.foreground': semantic.buttonForeground,

    // 终端
    'terminal.foreground': semantic.foreground,
    'terminal.selectionBackground': semantic.selection,
    'terminal.border': '#80808059',
    'terminalCursor.background': semantic.primary,
    'terminalCursor.foreground': semantic.foreground,

    // 终端 ANSI 颜色
    'terminal.ansiRed': theme.red,
    'terminal.ansiGreen': '#f00000',
    'terminal.ansiYellow': theme.yellow,
    'terminal.ansiBlue': theme.blue,
    'terminal.ansiMagenta': theme.magenta,
    'terminal.ansiCyan': theme.cyan,
    'terminal.ansiWhite': '#e5e5e5',
    'terminal.ansiBlack': '#333',

    'terminal.ansiBrightRed': theme.red,
    'terminal.ansiBrightGreen': theme.green,
    'terminal.ansiBrightYellow': theme.yellow,
    'terminal.ansiBrightBlue': theme.blue,
    'terminal.ansiBrightMagenta': theme.magenta,
    'terminal.ansiBrightCyan': theme.cyan,
    'terminal.ansiBrightWhite': '#e5e5e5',
    'terminal.ansiBrightBlack': '#666666',

    // 面包屑导航
    'breadcrumb.background': semantic.background,
    'breadcrumb.foreground': semantic.inactiveForeground,
    'breadcrumb.focusForeground': semantic.foreground,
    'breadcrumb.activeSelectionForeground': semantic.foreground,

    // 标签页
    'editorGroupHeader.tabsBackground': semantic.background,
    'tab.activeForeground': semantic.foreground,
    'tab.border': '#00000000',
    'tab.activeBackground': '#5551',
    'tab.activeBorderTop': semantic.primary,
    'tab.inactiveBackground': semantic.background,
    'tab.inactiveForeground': semantic.inactiveForeground,

    // 编辑器概览标尺
    'editorOverviewRuler.border': semantic.border,
    // 滚动条
    'scrollbarSlider.background': semantic.scrollbarSliderBg,
    'scrollbarSlider.hoverBackground': semantic.scrollbarSliderBg,
    'scrollbarSlider.activeBackground': semantic.scrollbarSliderBg,
    // 进度条
    'progressBar.background': theme.blue,

    // 窗口小部件
    'editorWidget.foreground': semantic.inactiveForeground,
    'editorWidget.background': semantic.background,
    'editorWidget.resizeBorder': '#5F5F5F',

    // 调试工具栏
    'debugToolBar.background': semantic.background,
    'debugToolBar.border': '#474747',

    // 通知
    'notifications.foreground': semantic.foreground,
    'notifications.background': semantic.background,
    'notificationToast.border': '#474747',
    'notificationsErrorIcon.foreground': theme.red,
    'notificationsWarningIcon.foreground': theme.orange,
    'notificationsInfoIcon.foreground': theme.blue,
    'notificationCenter.border': '#474747',
    'notificationCenterHeader.foreground': semantic.foreground,
    'notificationCenterHeader.background': semantic.background,
    'notifications.border': semantic.border,
    // 活动栏 (左侧图标栏)
    'activityBar.foreground': semantic.foreground,
    'activityBar.background': semantic.background,
    'activityBar.inactiveForeground': semantic.inactiveForeground,
    'activityBar.activeBorder': semantic.primary,
    'activityBarTop.activeBorder': semantic.primary,
    'activityBarBadge.foreground': semantic.buttonForeground,
    'activityBarBadge.background': semantic.primary,

    // Git 装饰器
    'gitDecoration.addedResourceForeground': theme.green,
    'gitDecoration.conflictingResourceForeground': theme.magenta,
    'gitDecoration.deletedResourceForeground': theme.red,
    'gitDecoration.ignoredResourceForeground': '#8c8c8c',
    'gitDecoration.modifiedResourceForeground': theme.orange,
    'gitDecoration.stageDeletedResourceForeground': theme.red,
    'gitDecoration.stageModifiedResourceForeground': theme.orange,
    'gitDecoration.submoduleResourceForeground': theme.blue,
    'gitDecoration.untrackedResourceForeground': theme.green,

    // 其他配置
    'settings.headerForeground': semantic.foreground,
    'settings.focusedRowBackground': '#12121200', // 当前选中行的背景色
    'settings.rowHoverBackground': '#12121200', // 鼠标悬停时的背景色
    'settings.modifiedItemIndicator': semantic.primary,
    'walkThrough.embeddedEditorBackground': '#00000050',
  }
}
