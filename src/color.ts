import { generateColorGradient } from "./utils.js";

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
  blue: generateColorGradient("#94B5C0"),
  cyan: generateColorGradient("#6eb4b4"),
  green: generateColorGradient("#8EBF9D"),
  magenta: generateColorGradient("#9D94BF"),
  orange: generateColorGradient("#BF9D94"),
  red: generateColorGradient("#cc8787"),

  blueLight: generateColorGradient("#7eadce"),
  cyanLight: generateColorGradient("#7ecebf"),
  greenLight: generateColorGradient("#7ece7e"),
  magentaLight: generateColorGradient("#7e7ece"),
  orangeLight: generateColorGradient("#cea67e"),
  redLight: generateColorGradient("#ce7e7e"),
};

// 主题特色颜色
export const theme = {
  blue: colors.blue[0], // #94B5C0
  green: colors.green[0], // #8EBF9D
  magenta: colors.magenta[0], // #9D94BF
  orange: colors.orange[0], // #BF9D94
  red: colors.red[0], // #cc8787
  cyan: colors.cyan[0], // #6eb4b4
};

export const lightTheme = {
  blue: colors.blueLight[3], // #5a86a6
  green: colors.greenLight[4], // #5aa65a
  magenta: colors.magentaLight[3], // #5a5aa6
  orange: colors.orangeLight[3], // #a6805a
  red: colors.redLight[3], // #a65a5a
  cyan: colors.cyanLight[3], // #5aa698
};

// 状态颜色
export const status = {
  error: colors.red[2],
  warning: colors.orange[2],
  info: colors.blue[2],
  success: colors.green[2],
  modified: colors.blue[2],
  deleted: colors.red[2],
};

// 语义化颜色
export const semantic = {
  primary: theme.green,
  primaryHover: colors.green[1],
  shadow: "#00000066",
  border: "#ffffff11",
  foreground: "#d1cdc2",
  buttonForeground: "#000",
  cursor: colors.gray[1],
  comment: colors.gray[4],
  listInactiveSelectionFg: theme.green,
  listHoverBackground: "#5555",
  background: colors.gray[8],
  inactiveForeground: colors.gray[2],
  widgetBackground: colors.gray[7],
  scrollBackground: colors.gray[7],
  activeBackground: colors.gray[7],
  selection: `${theme.green}20`,
  highlight: `${theme.green}20`,
  highlight2: `${theme.green}30`,
  punctuation: colors.gray[3],
  operator: colors.gray[2],
};

export const softSemantic = Object.assign({}, semantic, {
  background: colors.gray[7],
  scrollbar: colors.gray[6],
  widgetBackground: colors.gray[6],
  activeBackground: colors.gray[6],
  inactiveForeground: colors.gray[2],
  comment: colors.gray[3],
});

export const lightSematic = {
  primary: lightTheme.blue,
  primaryHover: colors.blueLight[2],
  shadow: "#3333",
  border: "#E6E5DF",
  foreground: "#555555",
  buttonForeground: "#fff",
  cursor: "#000",
  comment: colors.gray[2],
  listInactiveSelectionFg: lightTheme.blue,
  background: "#F8F8F0",
  widgetBackground: "#F8F5F0",
  scrollBackground: "#F8F5F0",
  activeBackground: "#F8F5F0",
  inactiveForeground: "#666666",
  listHoverBackground: `${lightTheme.blue}20`,
  selection: `${lightTheme.blue}20`,
  highlight: `${lightTheme.blue}20`,
  highlight2: `${lightTheme.blue}30`,
  punctuation: colors.gray[2],
  operator: colors.gray[3],
};

export type Color = typeof colors;
export type Theme = typeof theme;
export type Semantic = typeof semantic;
export type Status = typeof status;
