/**
 * 生成一个颜色数组,基于输入颜色递减饱和度和明度
 * @param baseColor 基础颜色
 * @returns 包含5个颜色的数组
 */
function generateColorGradient(baseColor: string): string[] {
  // 将16进制颜色转换为HSL
  const parseHex = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return [h * 360, s * 100, l * 100];
  };

  // HSL转回16进制
  const toHex = (h: number, s: number, l: number): string => {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    s /= 100;
    l /= 100;

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    const r = Math.round(hue2rgb(p, q, (h / 360 + 1 / 3) % 1) * 255);
    const g = Math.round(hue2rgb(p, q, (h / 360) % 1) * 255);
    const b = Math.round(hue2rgb(p, q, (h / 360 - 1 / 3) % 1) * 255);

    return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
  };

  const [h, s, l] = parseHex(baseColor);
  return Array.from({ length: 5 }, (_, i) =>
    toHex(h, Math.max(0, s - i * 5), Math.max(0, l - i * 5))
  );
}

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
console.log("colors: ", colors);

// 主题特色颜色
export const theme = {
  blue: colors.blue[0], // #94B5C0
  green: colors.green[0], //#8EBF9D
  magenta: colors.magenta[0], //#9D94BF
  orange: colors.orange[0], //#BF9D94
  red: colors.red[0], //#cc8787
  typeName: colors.cyan[0], //#6eb4b4
};

export const lightTheme = {
  blue: colors.blueLight[3], // #5a86a6
  green: colors.greenLight[3], //#5aa65a
  magenta: colors.magentaLight[3], //#5a5aa6
  orange: colors.orangeLight[3], //#a6805a
  red: colors.redLight[3], //#a65a5a
  typeName: colors.cyanLight[3], //#5aa698
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
  warning: colors.orange[2],
  info: colors.blue[2],
  success: colors.green[2],
  modified: colors.blue[2],
  deleted: colors.red[2],
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
  selection: `${theme.blue}40`,
  cursor: colors.gray[1],
  highlight: `${theme.blue}20`,
  highlight2: `${theme.blue}30`,
  listHoverBackground: "#66666633",
  listHoverForeground: colors.white,
  punctuation: colors.gray[3],
  operator: colors.gray[2],
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
  buttonBackground: colors.greenLight[4],
  buttonHoverBackground: colors.greenLight[3],
  buttonForeground: "#fff",
  comment: colors.gray[2],
  link: colors.greenLight[4],
  selection: `${lightTheme.green}40`,
  cursor: "#000",
  highlight: `${lightTheme.green}20`,
  highlight2: `${lightTheme.green}30`,
  listHoverBackground: alpha.highlight,
  listHoverForeground: colors.black,
  punctuation: colors.gray[2],
  operator: colors.gray[3],
};

export type Color = typeof colors;
export type Theme = typeof theme;
export type Alpha = typeof alpha;
export type Semantic = typeof semantic;
export type Status = typeof status;
