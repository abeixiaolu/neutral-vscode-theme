import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { genEditorColors } from "../src/ui.js";
import {
  semantic,
  softSemantic,
  status,
  alpha,
  colors,
  theme,
  lightSematic,
  lightTheme as lightThemeColor,
} from "../src/color.js";
import genTokenColors from "../src/tokens.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function build() {
  const darkTheme = {
    name: "Xiaolu Abei Dark",
    base: "vs-dark",
    semanticHighlighting: true,
    colors: genEditorColors({ semantic, alpha, colors, theme, status }),
    tokenColors: genTokenColors({ semantic, theme }),
  };
  const softTheme = {
    name: "Xiaolu Abei Soft",
    base: "vs-dark",
    semanticHighlighting: true,
    colors: genEditorColors({
      semantic: softSemantic,
      alpha,
      colors,
      theme,
      status,
    }),
    tokenColors: genTokenColors({ semantic: softSemantic, theme }),
  };
  const lightTheme = {
    name: "Xiaolu Abei Light",
    base: "vs",
    semanticHighlighting: true,
    colors: genEditorColors({
      semantic: lightSematic,
      alpha,
      colors,
      theme: lightThemeColor,
      status,
    }),
    tokenColors: genTokenColors({
      semantic: lightSematic,
      theme: lightThemeColor,
    }),
  };

  const outDir = path.resolve(__dirname, "../themes");
  const outFile = path.join(outDir, "Xiaolu Abei-color-theme.json");
  const outSoftFile = path.join(outDir, "Xiaolu Abei Soft-color-theme.json");
  const outLightFile = path.join(outDir, "Xiaolu Abei Light-color-theme.json");
  try {
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(outFile, JSON.stringify(darkTheme, null, 2), "utf-8");
    await fs.writeFile(
      outSoftFile,
      JSON.stringify(softTheme, null, 2),
      "utf-8"
    );
    await fs.writeFile(
      outLightFile,
      JSON.stringify(lightTheme, null, 2),
      "utf-8"
    );
    console.log("Theme file generated successfully!");
  } catch (err) {
    console.error("Error generating theme file:", err);
    process.exit(1);
  }
}

build();
