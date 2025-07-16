// 主题特色颜色
export const theme = {
  red: '#D88385',
  green: '#80C19A',
  yellow: '#c8b37a',
  blue: '#8BB6C2',
  magenta: '#8190ca',
  cyan: '#54B6B5',
  orange: '#C69B8A',

  redLight: '#de9698',
  greenLight: '#95cbab',
  yellowLight: '#d0bf90',
  blueLight: '#9bc0ca',
  magentaLight: '#93a0d2',
  cyanLight: '#65bdbc',
  orangeLight: '#ceaa9c',

  foreground: '#bbbbb8',
}

export const lightTheme = {
  red: '#C96A6C', // 明亮但不过分刺眼，和暗色主题色相一致
  green: '#4FA97B', // 明亮有辨识度
  yellow: '#BFA23A', // 明亮且易区分
  blue: '#4A97B8', // 明亮且有对比度
  magenta: '#6B7FC7', // 明亮且柔和
  cyan: '#2B9A9A', // 明亮且有辨识度
  orange: '#C48A3A', // 明亮且不刺眼

  redLight: '#E09A9C', // 明亮的浅红色
  greenLight: '#7FC6A0', // 明亮的浅绿色
  yellowLight: '#E0C76A', // 明亮的浅黄色
  blueLight: '#8AB6DE', // 明亮的浅蓝色
  magentaLight: '#A0B0E0', // 明亮的浅紫色
  cyanLight: '#5FC6C6', // 明亮的浅青色
  orangeLight: '#E0B06A', // 明亮的浅橙色

  foreground: '#515760', // 深灰，保证可读性
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
  primaryHover: theme.blueLight,
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
  deleted: theme.redLight,
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
  primaryHover: theme.greenLight,
})

export const lightSemantic = {
  primary: lightTheme.blue,
  primaryHover: lightTheme.blueLight,
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
  deleted: lightTheme.redLight,

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
  deleted: lightTheme2.redLight,

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
