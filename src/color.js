export const colors = {
  black: "#121212",
  white: "#ffffff",
  gray: [
    "#E5E7EA", // 更亮的灰色,增强对比度
    "#C8CBD0", // 调亮以提供更好的可读性
    "#AAACB2", // 中性灰色
    "#8D9095", // 适中的灰色
    "#70737A", // 深灰色
    "#545861", // 更深的灰色
    "#393C43", // 暗灰色
    "#21242A", // 近黑色
    "#12151A", // 最深的灰色,接近黑色
  ],
  blue: ["#B5CAD5", "#90AED3", "#839EC0", "#7790AF", "#6C839F", "#627791"],
  green: ["#9BD4B2", "#88C39D", "#78B28A", "#69A178", "#5C9067", "#517F57"],
  magenta: ["#CEB0D3", "#C098C9", "#B385C0", "#A673B7", "#9A62AE", "#8F52A6"],
  yellow: ["#D4BA9B", "#C7A984", "#BB9970", "#AF8A5D", "#A37C4C", "#986E3D"],
  red: ["#BF7A78", "#B36D6B", "#A7615F", "#9C5553", "#914A47", "#863F3C"],
};

// 主题特色颜色
export const theme = {
  blue: colors.blue[2],
  blueLight: colors.blue[0],
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
  selection: `${theme.blue}20`,
  highlight: `${theme.blue}40`,
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
  widgetBackground: colors.gray[7],
  activeBackground: colors.gray[6],
  inactiveBackground: colors.gray[8],
  buttonBackground: theme.blue,
  buttonHoverBackground: theme.blueLight,
  scrollbar: colors.gray[7],
  comment: colors.gray[5],
  link: theme.blue,
  selection: alpha.selection,
  cursor: colors.gray[1],
  highlight: alpha.highlight,
  inactiveForeground: colors.gray[5],
  listHoverBackground: "#66666633",
  listHoverForeground: colors.white,
};

export const softSemantic = Object.assign({}, semantic, {
  background: colors.gray[7],
  scrollbar: colors.gray[6],
  widgetBackground: colors.gray[6],
  activeBackground: colors.gray[5],
  inactiveBackground: colors.gray[7],
});
