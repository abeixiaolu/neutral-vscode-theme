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

// 语义化颜色
export const darkSemantic = {
  primary: theme.blue,
  primaryHover: `${theme.blue}BB`,
  shadow: `${theme.foreground}10`,
  border: `${theme.foreground}28`,
  foreground: theme.foreground,
  cursor: theme.foreground,
  comment: `${theme.foreground}55`,
  inactiveForeground: `${theme.foreground}80`,
  ghostForeground: `${theme.foreground}88`,
  listHoverBackground: `${theme.foreground}36`,
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
  punctuation: theme.foreground,
  background: '#1e201f',
  widgetBackground: '#272a28', // mix(background, blue, 20%)
  scrollBackground: '#272a28', // mix(background, blue, 30%)
  scrollbarSliderBg: '#272a28', // mix(background, blue, 40%)
  activeBackground: '#272a28', // same as scrollbarSlider for consistency
  buttonForeground: '#1e201f', // 深色文字以保证在亮色按钮上的可读性
}

export const lightSemantic = {
  primary: lightTheme.cyan,
  primaryHover: `${lightTheme.cyan}BB`,
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

export type Theme = typeof theme
export type Semantic = typeof darkSemantic
