// 主题特色颜色
export const theme = {
  red: '#D88385',
  green: '#80C19A',
  yellow: '#c8b37a',
  blue: '#8BB6C2',
  magenta: '#8190ca',
  cyan: '#54B6B5',
  orange: '#C69B8A',
  foreground: '#bbbbb8',
}

export const lightTheme = {
  red: '#bd3f3f',
  green: '#2b9815',
  yellow: '#b69c18',
  blue: '#188ca9',
  magenta: '#4655c8',
  cyan: '#1b91b8',
  orange: '#ab6b18',

  foreground: '#515760',
}

export const lightTheme2 = {
  red: '#B86A6C', // 降低亮度后的柔和红色
  green: '#368A6A', // 降低亮度后的绿色
  yellow: '#9E8430', // 降低亮度后的黄色
  blue: '#2F6F97', // 降低亮度后的蓝色
  magenta: '#495A99', // 降低亮度后的紫色
  cyan: '#187878', // 降低亮度后的青色
  orange: '#A06B2A', // 降低亮度后的橙色

  redLight: '#C98A8C', // 降低亮度后的浅红色
  greenLight: '#5FA88A', // 降低亮度后的浅绿色
  yellowLight: '#BBAA6A', // 降低亮度后的浅黄色
  blueLight: '#5A8BAA', // 降低亮度后的浅蓝色
  magentaLight: '#7A8CB8', // 降低亮度后的浅紫色
  cyanLight: '#3A9A9A', // 降低亮度后的浅青色
  orangeLight: '#B88A5A', // 降低亮度后的浅橙色

  foreground: '#515760', // 略深的灰色，适合亮色背景
}

// 语义化颜色
export const darkSemantic = {
  primary: theme.blue,
  primaryHover: `${theme.blue}BB`,
  shadow: `${theme.foreground}10`,
  border: `${theme.foreground}08`,
  foreground: theme.foreground,
  cursor: theme.foreground,
  comment: `${theme.foreground}55`,
  inactiveForeground: `${theme.foreground}66`,
  ghostForeground: `${theme.foreground}88`,
  listHoverBackground: `${theme.foreground}10`,
  selection: `${theme.foreground}20`,
  highlight: `${theme.foreground}20`,
  highlight2: `${theme.foreground}30`,
  lineHighlightBackground: `${theme.foreground}20`,
  error: theme.red,
  warning: theme.orange,
  info: theme.blue,
  success: theme.green,
  modified: theme.blue,
  deleted: theme.red,
  buttonForeground: '#0d0d0d',
  background: '#0d0d0d',
  widgetBackground: '#1a1a1a',
  scrollBackground: '#1a1a1a',
  scrollbarSliderBg: '#202020',
  activeBackground: '#202020',
  punctuation: theme.foreground,
}

export const darkSoftSemantic = Object.assign({}, darkSemantic, {
  buttonForeground: '#1a1a1a',
  background: '#1a1a1a',
  widgetBackground: '#262626',
  scrollBackground: '#262626',
  scrollbarSliderBg: '#333333',
  activeBackground: '#333333',
})

export const darkGreenSemantic = Object.assign({}, darkSemantic, {
  buttonForeground: '#0b0f0c',
  background: '#0b0f0c',
  widgetBackground: '#121714',
  scrollBackground: '#121714',
  scrollbarSliderBg: '#161d19',
  activeBackground: '#161d19',
  primary: theme.green,
  primaryHover: `${theme.green}BB`,
})

export const lightSemantic = {
  primary: lightTheme.blue,
  primaryHover: `${lightTheme.blue}BB`,
  listHoverBackground: `${lightTheme.foreground}10`,
  foreground: lightTheme.foreground,
  cursor: lightTheme.foreground,
  shadow: `${lightTheme.foreground}16`,
  border: `${lightTheme.foreground}16`,
  comment: `${lightTheme.foreground}60`,
  ghostForeground: `${lightTheme.foreground}55`,
  selection: `${lightTheme.foreground}20`,
  highlight: `${lightTheme.foreground}20`,
  highlight2: `${lightTheme.foreground}30`,
  punctuation: lightTheme.foreground,
  inactiveForeground: `${lightTheme.foreground}80`,
  lineHighlightBackground: `${lightTheme.foreground}10`,

  error: lightTheme.red,
  warning: lightTheme.orange,
  info: lightTheme.blue,
  success: lightTheme.green,
  modified: lightTheme.blue,
  deleted: lightTheme.red,

  buttonForeground: '#ffffff',
  background: '#ffffff',
  widgetBackground: '#f2f2f2',
  scrollBackground: '#f2f2f2',
  scrollbarSliderBg: '#ededed',
  activeBackground: '#ededed',
}

export const lightSemanticHard = {
  primary: lightTheme2.blue,
  primaryHover: lightTheme2.blueLight,
  listHoverBackground: `${lightTheme2.foreground}10`,
  foreground: lightTheme2.foreground,
  cursor: lightTheme2.foreground,
  shadow: `${lightTheme2.foreground}16`,
  border: `${lightTheme2.foreground}16`,
  comment: `${lightTheme2.foreground}60`,
  ghostForeground: `${lightTheme2.foreground}55`,
  selection: `${lightTheme2.foreground}20`,
  highlight: `${lightTheme2.foreground}20`,
  highlight2: `${lightTheme2.foreground}30`,
  punctuation: lightTheme2.foreground,
  inactiveForeground: `${lightTheme2.foreground}80`,
  lineHighlightBackground: `${lightTheme2.foreground}10`,

  error: lightTheme2.red,
  warning: lightTheme2.orange,
  info: lightTheme2.blue,
  success: lightTheme2.green,
  modified: lightTheme2.blue,
  deleted: lightTheme2.red,

  buttonForeground: '#ffffff',
  background: '#ffffff',
  widgetBackground: '#f2f2f2',
  scrollBackground: '#f2f2f2',
  scrollbarSliderBg: '#ededed',
  activeBackground: '#ededed',
}

export const lightSoftSemantic = Object.assign({}, lightSemantic, {
  // 95
  buttonForeground: '#f6f4ee',
  background: '#f6f4ee',
  // 93
  widgetBackground: '#f3f0e8',
  scrollBackground: '#f3f0e8',
  // 90
  scrollbarSliderBg: '#ede9de',
  activeBackground: '#ede9de',
})

export const lightGreenSemantic = Object.assign({}, lightSemantic, {
  buttonForeground: '#eff6ee',
  background: '#eff6ee',
  widgetBackground: '#e9f3e8',
  scrollBackground: '#e9f3e8',
  scrollbarSliderBg: '#dfedde',
  activeBackground: '#dfedde',
})

export type Theme = typeof theme
export type Semantic = typeof darkSemantic
