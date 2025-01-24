import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import {
  lightSematic,
  lightTheme as lightThemeColor,
  semantic,
  softSemantic,
  theme,
} from '../src/color.js'
import genTokens from '../src/tokens.js'
import genEditors from '../src/ui.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function build() {
  const darkTheme = {
    name: 'Xiaolu Abei Dark',
    base: 'vs-dark',
    semanticHighlighting: true,
    colors: genEditors({ semantic, theme }),
    tokenColors: genTokens({ semantic, theme }),
  }
  const softTheme = {
    name: 'Xiaolu Abei Soft',
    base: 'vs-dark',
    semanticHighlighting: true,
    colors: genEditors({
      semantic: softSemantic,
      theme,
    }),
    tokenColors: genTokens({
      semantic: softSemantic,
      theme,
      moreGreen: true,
    }),
  }
  const lightTheme = {
    name: 'Xiaolu Abei Light',
    base: 'vs',
    semanticHighlighting: true,
    colors: genEditors({
      semantic: lightSematic,
      theme: lightThemeColor,
    }),
    tokenColors: genTokens({
      semantic: lightSematic,
      theme: lightThemeColor,
    }),
  }

  const outDir = path.resolve(__dirname, '../themes')
  const outFile = path.join(outDir, 'Xiaolu Abei-color-theme.json')
  const outSoftFile = path.join(outDir, 'Xiaolu Abei Soft-color-theme.json')
  const outLightFile = path.join(outDir, 'Xiaolu Abei Light-color-theme.json')
  try {
    await fs.mkdir(outDir, { recursive: true })
    await fs.writeFile(outFile, JSON.stringify(darkTheme, null, 2), 'utf-8')
    await fs.writeFile(
      outSoftFile,
      JSON.stringify(softTheme, null, 2),
      'utf-8',
    )
    await fs.writeFile(
      outLightFile,
      JSON.stringify(lightTheme, null, 2),
      'utf-8',
    )
    console.log('Theme file generated successfully!')
  }
  catch (err) {
    console.error('Error generating theme file:', err)
    process.exit(1)
  }
}

build()
