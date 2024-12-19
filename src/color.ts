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
  blue: ["#94B5C0", "#85A6B2", "#769197", "#688490", "#5F7D88", "#587984"],
  green: ["#8EBF9D", "#7FAD89", "#719B77", "#638A67", "#5D8769", "#588467"],
  magenta: ["#9D94BF", "#8E85AD", "#77719B", "#67638A", "#615D87", "#586084"],
  yellow: ["#BF9D94", "#AD8E85", "#9B7771", "#8A6763", "#87615D", "#846758"],
  red: ["#BF9494", "#AD8585", "#9B7777", "#8A6767", "#875D5D", "#845858"],
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

export const lightTheme = {
  blue: colors.blue[5],
  blueLight: colors.blue[4],
  green: colors.green[5],
  magenta: colors.magenta[5],
  yellow: colors.yellow[5],
  red: colors.red[5],
};

// 透明度变体
export const alpha = {
  white10: `${colors.white}1a`,
  white25: `${colors.white}40`,
  white88: `${colors.white}bb`,
  selection: `${colors.blue[3]}33`,
  highlight: `${colors.blue[3]}22`,
  highlight2: `${colors.blue[3]}33`,
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
  primary: theme.green,
  shadow: "#00000066",
  border: "#ffffff11",
  foreground: "#d1cdc2",
  buttonForeground: "#000",
  background: colors.gray[8],
  editorBackground: colors.gray[8],
  inactiveBackground: colors.gray[8],
  widgetBackground: colors.gray[7],
  scrollbar: colors.gray[7],
  activeBackground: colors.gray[7],
  inactiveForeground: colors.gray[2],
  buttonBackground: colors.green[1],
  buttonHoverBackground: colors.green[0],
  comment: colors.gray[4],
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
  inactiveForeground: colors.gray[2],
  comment: colors.gray[3],
});

export const lightSematic = {
  primary: lightTheme.green,
  shadow: "#33333333",
  border: "#E6E5DF",
  foreground: "#333",
  background: "#F8F8F4",
  editorBackground: "#F8F8F4",
  inactiveBackground: "#F8F8F4",
  widgetBackground: "#F1F0E9",
  scrollbar: "#F1F0E9",
  activeBackground: "#F1F0E9",
  inactiveForeground: "#666666",
  buttonBackground: colors.green[5],
  buttonHoverBackground: colors.green[4],
  buttonForeground: "#fff",
  comment: colors.gray[2],
  link: colors.green[4],
  selection: alpha.selection,
  cursor: "#000",
  highlight: alpha.highlight,
  highlight2: alpha.highlight2,
  listHoverBackground: alpha.highlight,
  listHoverForeground: colors.black,
};

export type Color = typeof colors;
export type Theme = typeof theme;
export type Alpha = typeof alpha;
export type Semantic = typeof semantic;
export type Status = typeof status;
