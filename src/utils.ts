/**
 * 生成一个颜色数组,基于输入颜色递减饱和度和明度
 * @param baseColor 基础颜色
 * @returns 包含5个颜色的数组
 */
export function generateColorGradient(baseColor: string): string[] {
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
