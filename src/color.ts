// 主题特色颜色
export const theme = {
  red: '#D88385',
  green: '#80C19A',
  yellow: '#c8b37a',
  blue: '#8BB6C2',
  magenta: '#8190ca',
  cyan: '#54B6B5',
  orange: '#C69B8A',
  foreground: '#e7e7eb',
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
  primary: theme.green,
  primaryHover: `${theme.green}BB`,
  shadow: `${theme.foreground}10`,
  border: `${theme.foreground}08`,
  foreground: theme.foreground,
  cursor: theme.foreground,
  comment: `${theme.foreground}55`,
  inactiveForeground: `${theme.foreground}80`,
  ghostForeground: `${theme.foreground}88`,
  listHoverBackground: `${theme.foreground}12`,
  selection: `${theme.foreground}20`,
  highlight: `${theme.foreground}20`,
  highlight2: `${theme.foreground}30`,
  lineHighlightBackground: `${theme.foreground}12`,
  error: theme.red,
  warning: theme.orange,
  info: theme.blue,
  success: theme.green,
  modified: theme.blue,
  deleted: theme.red,
  punctuation: theme.foreground,
  background: '#131313',
  buttonForeground: '#131313',
  widgetBackground: '#181818',
  scrollBackground: '#181818',
  scrollbarSliderBg: '#181818',
  activeBackground: '#181818',
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

  background: '#ffffff',
  buttonForeground: '#ffffff',
  widgetBackground: '#f5f5f5',
  scrollBackground: '#f5f5f5',
  scrollbarSliderBg: '#f5f5f5',
  activeBackground: '#f5f5f5',
}

export const lightSoftSemantic = Object.assign({}, lightSemantic, {
  background: '#fbfaf5',
  buttonForeground: '#fbfaf5',
  widgetBackground: '#f8f7f0',
  scrollBackground: '#f8f7f0',
  scrollbarSliderBg: '#f8f7f0',
  activeBackground: '#f8f7f0',
})

export type Theme = typeof theme
export type Semantic = typeof darkSemantic
