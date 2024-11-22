import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { editorColors } from "../src/editor.js";
import tokenColors from "../src/tokens.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function build() {
  const theme = {
    name: "Xiaolu Abei",
    type: "dark",
    semanticHighlighting: true,
    semanticTokenColors: {
      newOperator: "#C586C0",
      stringLiteral: "#ce9178",
      customLiteral: "#DCDCAA",
      numberLiteral: "#b5cea8",
    },
    colors: editorColors,
    tokenColors,
  };

  const outDir = path.resolve(__dirname, "../themes");
  const outFile = path.join(outDir, "Xiaolu Abei-color-theme.json");

  try {
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(outFile, JSON.stringify(theme, null, 2), "utf-8");
    console.log("Theme file generated successfully!");
  } catch (err) {
    console.error("Error generating theme file:", err);
    process.exit(1);
  }
}

build();
