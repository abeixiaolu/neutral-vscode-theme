// 主题特色颜色
export const theme = {
  red: '#D88385',
  green: '#80C19A',
  yellow: '#c8b37a',
  blue: '#8BB6C2',
  magenta: '#8190ca',
  cyan: '#54B6B5',
  orange: '#C69B8A',
  foreground: '#d1d5db',
}

export const lightTheme = {
  red: '#bd3f3f',
  green: '#2b9815',
  yellow: '#b69c18',
  blue: '#188ca9',
  magenta: '#4655c8',
  cyan: '#1b91b8',
  orange: '#ab6b18',
  foreground: '#272824',
}

// 语义化颜色
export const darkSemantic = {
  primary: theme.green,
  primaryHover: `${theme.green}BB`,
  shadow: `${theme.foreground}10`,
  border: `${theme.foreground}16`,
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
  // #0c0b0e,#101010,#211d20,#f8553a,#ffb800,#8d8d8d,#3c3c3c
  background: '#0c0b0e',
  buttonForeground: '#211d20',
  widgetBackground: '#181818',
  scrollBackground: '#101010',
  scrollbarSliderBg: '#181818',
  activeBackground: '#202020',
  panelBackground: '#101010',
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
  scrollbarSliderBg: '#00000030',
  activeBackground: '#f5f5f5',
  panelBackground: '#ffffff',
}

export const lightSoftSemantic = Object.assign({}, lightSemantic, {
  background: '#FCF9F5',
  buttonForeground: '#FCF9F5',
  widgetBackground: '#FCF9F5',
  scrollBackground: '#FCF9F5',
  activeBackground: '#FCF9F5',
  panelBackground: '#FCF9F5',
})

export type Theme = typeof theme
export type Semantic = typeof darkSemantic
