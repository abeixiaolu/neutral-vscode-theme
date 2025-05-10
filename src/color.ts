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
  red: '#D88385',
  green: '#80C19A',
  yellow: '#c8b37a',
  blue: '#8BB6C2',
  magenta: '#8190ca',
  cyan: '#54B6B5',
  orange: '#C69B8A',

  redLight: '#C27171',
  greenLight: '#71C271',
  yellowLight: '#C29971',
  blueLight: '#71A0C2',
  magentaLight: '#7171C2',
  cyanLight: '#71C2B3',
  orangeLight: '#c29a70',

  foreground: '#d1cdc2',
}

export const lightTheme = {
  red: '#995254',
  green: '#40924F',
  yellow: '#a19549',
  blue: '#4C7993',
  magenta: '#565694',
  cyan: '#409285',
  orange: '#8e5e4d',

  redLight: '#b56464',
  greenLight: '#64b564',
  yellowLight: '#b7ab5f',
  blueLight: '#6494b5',
  magentaLight: '#6464b5',
  cyanLight: '#64b5a6',
  orangeLight: '#a8725e',

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
  primary: theme.blue,
  primaryHover: colors.blue[1],
  shadow: '#00000066',
  border: '#ffffff11',
  foreground: theme.foreground,
  buttonForeground: '#000',
  cursor: colors.gray[1],
  comment: colors.gray[3],
  listInactiveSelectionFg: theme.blue,
  listHoverBackground: '#5555',
  inactiveForeground: colors.gray[3],
  ghostForeground: `${theme.blue}88`,
  background: '#121212',
  widgetBackground: '#121212',
  scrollBackground: '#121212',
  scrollbarSliderBg: '#181818',
  activeBackground: '#181818',
  selection: `${theme.foreground}20`,
  highlight: `${theme.foreground}20`,
  highlight2: `${theme.foreground}30`,
  punctuation: theme.foreground,
  operator: colors.gray[2],
  lineHighlightBackground: '#8881',
}

export const darkSoftSemantic = Object.assign({}, darkSemantic, {
  background: '#222222',
  widgetBackground: '#262626',
  scrollBackground: '#262626',
  activeBackground: '#282828',
  scrollbarSliderBg: '#282828',
  inactiveForeground: colors.gray[3],
  comment: colors.gray[3],
})

export const darkGreenSemantic = Object.assign({}, darkSemantic, {
  background: '#121414',
  widgetBackground: '#181d1a',
  scrollBackground: '#181d1a',
  scrollbarSliderBg: '#202422',
  activeBackground: '#202422',
  primary: theme.green,
  primaryHover: colors.green[1],
})

export const lightSoftSemantic = {
  primary: lightTheme.blue,
  primaryHover: colors.blueLight[2],
  shadow: '#3333',
  border: '#E6E5DF',
  foreground: lightTheme.foreground,
  buttonForeground: '#fff',
  cursor: '#000',
  comment: colors.gray[2],
  listInactiveSelectionFg: lightTheme.blue,
  background: '#F8F8F0',
  widgetBackground: '#e8e8e0',
  scrollBackground: '#f4f4ea',
  scrollbarSliderBg: '#f2f2e8',
  activeBackground: '#d8d8d0',
  inactiveForeground: '#666a',
  ghostForeground: `${lightTheme.blue}aa`,
  listHoverBackground: `${lightTheme.blue}28`,
  selection: `${lightTheme.foreground}20`,
  highlight: `${lightTheme.foreground}20`,
  highlight2: `${lightTheme.foreground}30`,
  punctuation: lightTheme.foreground,
  operator: colors.gray[3],
  lineHighlightBackground: '#3331',
}

export const lightSemantic = Object.assign({}, lightSoftSemantic, {
  primary: lightTheme.green,
  primaryHover: colors.greenLight[2],
  listInactiveSelectionFg: lightTheme.green,
  ghostForeground: `${lightTheme.green}aa`,
  listHoverBackground: `${lightTheme.green}28`,
  background: '#ffffff',
  widgetBackground: '#f4f4f4',
  scrollBackground: '#f8f8f8',
  scrollbarSliderBg: '#f8f8f8',
  activeBackground: '#eaeaea',
})

export const lightGreenSemantic = Object.assign({}, lightSoftSemantic, {
  primary: lightTheme.green,
  primaryHover: colors.greenLight[2],
  listInactiveSelectionFg: lightTheme.green,
  ghostForeground: `${lightTheme.green}aa`,
  listHoverBackground: `${lightTheme.green}28`,
  background: '#f8fff8',
  widgetBackground: '#e8f0e8',
  scrollBackground: '#f4faf4',
  scrollbarSliderBg: '#f2f8f2',
  activeBackground: '#d8e0d8',
})

export type Color = typeof colors
export type Theme = typeof theme
export type Semantic = typeof darkSemantic
export type Status = typeof status
