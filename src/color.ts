import { generateColorGradient } from './utils.js'

export const colors = {
  black: '#121212',
  white: '#ffffff',
  gray: [
    '#e5e5e5',
    '#d4d4d4',
    '#a3a3a3',
    '#737373',
    '#525252',
    '#404040',
    '#262626',
    '#171717',
    '#0a0a0a',
  ],
  blue: generateColorGradient('#94B5C0'),
  cyan: generateColorGradient('#6eb4b4'),
  green: generateColorGradient('#8EBF9D'),
  magenta: generateColorGradient('#9D94BF'),
  orange: generateColorGradient('#BF9D94'),
  red: generateColorGradient('#cc8787'),

  blueLight: generateColorGradient('#7eadce'),
  cyanLight: generateColorGradient('#7ecebf'),
  greenLight: generateColorGradient('#7ece7e'),
  magentaLight: generateColorGradient('#7e7ece'),
  orangeLight: generateColorGradient('#cea67e'),
  redLight: generateColorGradient('#ce7e7e'),
}

// 主题特色颜色
export const theme = {
  blue: '#94B5C0',
  green: '#8EBF9D',
  magenta: '#9D94BF',
  orange: '#BF9D94',
  red: '#cc8787',
  cyan: '#6eb4b4',
  foreground: '#d1cdc2',
}

export const lightTheme = {
  blue: '#5a86a6',
  green: '#5aa65a',
  magenta: '#5a5aa6',
  orange: '#a6805a',
  red: '#a65a5a',
  cyan: '#5aa698',
  foreground: '#555555',
}

// 状态颜色
export const status = {
  error: colors.red[2],
  warning: colors.orange[2],
  info: colors.blue[2],
  success: colors.green[2],
  modified: colors.blue[2],
  deleted: colors.red[2],
}

// 语义化颜色
export const darkSemantic = {
  primary: theme.green,
  primaryHover: colors.green[1],
  shadow: '#00000066',
  border: '#ffffff11',
  foreground: theme.foreground,
  buttonForeground: '#000',
  cursor: colors.gray[1],
  comment: colors.gray[3],
  listInactiveSelectionFg: theme.green,
  listHoverBackground: '#5555',
  inactiveForeground: colors.gray[3],
  ghostForeground: `${theme.green}88`,
  background: '#080808',
  widgetBackground: '#121212',
  scrollBackground: '#121212',
  scrollbarSliderBg: '#181818',
  activeBackground: '#181818',
  selection: `${theme.foreground}20`,
  highlight: `${theme.foreground}20`,
  highlight2: `${theme.foreground}30`,
  punctuation: theme.foreground,
  operator: colors.gray[2],
}

export const darkSoftSemantic = Object.assign({}, darkSemantic, {
  background: '#181818',
  widgetBackground: '#222222',
  scrollBackground: '#222222',
  activeBackground: '#282828',
  scrollbarSliderBg: '#282828',
  inactiveForeground: colors.gray[3],
  comment: colors.gray[3],
})

export const lightSoftSemantic = {
  primary: lightTheme.green,
  primaryHover: colors.greenLight[2],
  shadow: '#3333',
  border: '#E6E5DF',
  foreground: lightTheme.foreground,
  buttonForeground: '#fff',
  cursor: '#000',
  comment: colors.gray[2],
  listInactiveSelectionFg: lightTheme.green,
  background: '#F8F8F0',
  widgetBackground: '#e8e8e0',
  scrollBackground: '#f4f4ea',
  scrollbarSliderBg: '#f2f2e8',
  activeBackground: '#d8d8d0',
  inactiveForeground: '#666666',
  ghostForeground: `${lightTheme.green}aa`,
  listHoverBackground: `${lightTheme.green}20`,
  selection: `${lightTheme.foreground}20`,
  highlight: `${lightTheme.foreground}20`,
  highlight2: `${lightTheme.foreground}30`,
  punctuation: lightTheme.foreground,
  operator: colors.gray[3],
}

export const lightSemantic = Object.assign({}, lightSoftSemantic, {
  background: '#ffffff',
  widgetBackground: '#f4f4f4',
  scrollBackground: '#f8f8f8',
  scrollbarSliderBg: '#f8f8f8',
  activeBackground: '#eaeaea',
})

export type Color = typeof colors
export type Theme = typeof theme
export type Semantic = typeof darkSemantic
export type Status = typeof status
