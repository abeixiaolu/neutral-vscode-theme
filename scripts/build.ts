import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import {
  darkSemantic,
  lightSemantic,
  lightSoftSemantic,
  lightTheme,
  theme,
} from '../src/color.js'
import genTokens from '../src/tokens.js'
import genEditors from '../src/ui.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function build() {
  const dark = {
    name: 'Neutral Dark',
    base: 'vs-dark',
    semanticHighlighting: true,
    colors: genEditors({ semantic: darkSemantic, theme }),
    tokenColors: genTokens({ semantic: darkSemantic, theme }),
  }
  const lightSoft = {
    name: 'Neutral Light Soft',
    base: 'vs',
    semanticHighlighting: true,
    colors: genEditors({ semantic: lightSoftSemantic, theme: lightTheme }),
    tokenColors: genTokens({ semantic: lightSoftSemantic, theme: lightTheme, outerColors: { punctuation: '#999' } }),
  }
  const light = {
    name: 'Neutral Light',
    base: 'vs',
    semanticHighlighting: true,
    colors: genEditors({ semantic: lightSemantic, theme: lightTheme }),
    tokenColors: genTokens({ semantic: lightSemantic, theme: lightTheme, outerColors: { punctuation: '#999' } }),
  }
  const outDir = path.resolve(__dirname, '../themes')
  const outDarkFile = path.join(outDir, 'Neutral Dark-color-theme.json')
  const outLightFile = path.join(outDir, 'Neutral Light-color-theme.json')
  const outLightSoftFile = path.join(outDir, 'Neutral Light Soft-color-theme.json')

  try {
    await fs.mkdir(outDir, { recursive: true })
    await fs.writeFile(outDarkFile, JSON.stringify(dark, null, 2), 'utf-8')
    await fs.writeFile(outLightSoftFile, JSON.stringify(lightSoft, null, 2), 'utf-8')
    await fs.writeFile(outLightFile, JSON.stringify(light, null, 2), 'utf-8')
    console.log('Theme file generated successfully!')
  }
  catch (err) {
    console.error('Error generating theme file:', err)
    process.exit(1)
  }
}

build()
