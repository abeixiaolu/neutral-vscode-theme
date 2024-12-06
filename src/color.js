// 基础颜色
export const base = {
  white: "#ffffff",
  black: "#000000",
  gray: {
    100: "#d3d5d8", // 最浅
    200: "#b7babe",
    300: "#9c9fa4",
    400: "#82858a",
    500: "#686b71",
    600: "#4f5157",
    700: "#36383d",
    800: "#1d1f23",
    900: "#0e1116",
  },
};

// 主题特色颜色
export const theme = {
  blue: "#90aed3",
  green: "#9bd4b2",
  magenta: "#ceb0d3",
  yellow: "#d4ba9b",
  red: "#BF7A78",
};

// 透明度变体
export const alpha = {
  white10: `${base.white}1a`,
  white25: `${base.white}40`,
  white88: `${base.white}bb`,
  selection: `${theme.blue}20`,
  highlight: `${theme.blue}40`,
};

// 状态颜色
export const status = {
  error: "#f48771",
  warning: "#cca700",
  info: "#75beff",
  success: "#587c0c",
  modified: "#0c7d9d",
  deleted: "#94151b",
};

// UI 元素颜色
export const ui = {
  border: `${base.gray[600]}88`,
  shadow: "#0000005c",
  focusBorder: "#007fd400",
  widgetBackground: base.gray[800],
  activeBackground: base.gray[700],
  inactiveBackground: base.gray[900],
};

// 语义化颜色
export const semantic = {
  foreground: "#d1cdc2",
  background: base.gray[900],
  scrollbar: base.gray[800],
  border: "#ff000000",
  comment: base.gray[600],
  link: "#3794ff",
  selection: alpha.selection,
  cursor: base.gray[100],
  highlight: alpha.highlight,
  inactiveForeground: base.gray[600],
};

export const softSemantic = Object.assign({}, semantic, {
  background: base.gray[800],
  scrollbar: base.gray[700],
});

export const softUI = Object.assign({}, ui, {
  widgetBackground: base.gray[700],
  activeBackground: base.gray[600],
});
