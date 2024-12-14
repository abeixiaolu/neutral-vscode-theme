export const colors = {
  black: "#121212",
  white: "#ffffff",
  gray: [
    "#e5e5e5",
    "#d4d4d4",
    "#a3a3a3",
    "#737373",
    "#525252",
    "#404040",
    "#262626",
    "#171717",
    "#0a0a0a",
  ],
  blue: ["#839EC0", "#7790AF", "#6C839F", "#627791", "#576B83", "#475b83"],
  green: ["#9BD4B2", "#88C39D", "#78B28A", "#69A178", "#5C9067", "#517F57"],
  magenta: ["#CEB0D3", "#C098C9", "#B385C0", "#A673B7", "#9A62AE", "#8F52A6"],
  yellow: ["#D4BA9B", "#C7A984", "#BB9970", "#AF8A5D", "#A37C4C", "#986E3D"],
  red: ["#BF7A78", "#B36D6B", "#A7615F", "#9C5553", "#914A47", "#863F3C"],
};

// 主题特色颜色
export const theme = {
  blue: colors.blue[0],
  blueLight: colors.blue[1],
  green: colors.green[0],
  magenta: colors.magenta[0],
  yellow: colors.yellow[0],
  red: colors.red[0],
};

// 透明度变体
export const alpha = {
  white10: `${colors.white}1a`,
  white25: `${colors.white}40`,
  white88: `${colors.white}bb`,
  selection: `${colors.blue[3]}88`,
  highlight: `${colors.blue[3]}22`,
  highlight2: `${colors.blue[3]}44`,
};

// 状态颜色
export const status = {
  error: colors.red[2],
  warning: colors.yellow[2],
  info: colors.blue[2],
  success: colors.green[2],
  modified: colors.blue[2],
  deleted: colors.red[4],
};

// 语义化颜色
export const semantic = {
  shadow: "#00000066",
  border: "#ff000000",
  foreground: "#d1cdc2",
  background: colors.gray[8],
  editorBackground: colors.gray[8],
  inactiveBackground: colors.gray[8],
  widgetBackground: colors.gray[7],
  scrollbar: colors.gray[7],
  activeBackground: colors.gray[7],
  inactiveForeground: colors.gray[4],
  buttonBackground: theme.blue,
  buttonHoverBackground: theme.blueLight,
  comment: colors.gray[5],
  link: theme.blue,
  selection: alpha.selection,
  cursor: colors.gray[1],
  highlight: alpha.highlight,
  highlight2: alpha.highlight2,
  listHoverBackground: "#66666633",
  listHoverForeground: colors.white,
};

export const softSemantic = Object.assign({}, semantic, {
  background: colors.gray[7],
  editorBackground: colors.gray[7],
  inactiveBackground: colors.gray[7],
  scrollbar: colors.gray[6],
  widgetBackground: colors.gray[6],
  activeBackground: colors.gray[6],
  inactiveForeground: colors.gray[4],
  comment: colors.gray[5],
});
