import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { genEditorColors } from "../src/editor.js";
import tokenColors from "../src/tokens.js";
import {
  semantic,
  softSemantic,
  ui,
  status,
  alpha,
  base,
  theme,
  softUI,
} from "../src/color.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function build() {
  const darkTheme = {
    name: "Xiaolu Abei Dark",
    type: "dark",
    semanticHighlighting: true,
    colors: genEditorColors({ semantic, ui, alpha, base, theme, status }),
    tokenColors,
  };
  const softTheme = {
    name: "Xiaolu Abei Soft",
    type: "dark",
    semanticHighlighting: true,
    colors: genEditorColors({
      semantic: softSemantic,
      ui: softUI,
      alpha,
      base,
      theme,
      status,
    }),
    tokenColors,
  };

  const outDir = path.resolve(__dirname, "../themes");
  const outFile = path.join(outDir, "Xiaolu Abei-color-theme.json");
  const outSoftFile = path.join(outDir, "Xiaolu Abei Soft-color-theme.json");
  try {
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(outFile, JSON.stringify(darkTheme, null, 2), "utf-8");
    await fs.writeFile(
      outSoftFile,
      JSON.stringify(softTheme, null, 2),
      "utf-8"
    );
    console.log("Theme file generated successfully!");
  } catch (err) {
    console.error("Error generating theme file:", err);
    process.exit(1);
  }
}

build();
