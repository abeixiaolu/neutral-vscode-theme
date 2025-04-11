import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import {
  darkGreenSemantic,
  darkSemantic,
  darkSoftSemantic,
  lightGreenSemantic,
  lightSemantic,
  lightSoftSemantic,
  lightTheme as lightThemeColor,
  theme,
} from '../src/color.js'
import genTokens from '../src/tokens.js'
import genEditors from '../src/ui.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function build() {
  const dark = {
    name: 'Xiaolu Abei Dark',
    base: 'vs-dark',
    semanticHighlighting: true,
    colors: genEditors({ semantic: darkSemantic, theme }),
    tokenColors: genTokens({ semantic: darkSemantic, theme }),
  }
  const darkItalic = {
    ...dark,
    name: 'Xiaolu Abei Dark Italic',
    tokenColors: genTokens({ semantic: darkSemantic, theme, fontStyle: 'italic' }),
  }

  const darkGreen = {
    ...dark,
    name: 'Xiaolu Abei Dark Green',
    colors: genEditors({ semantic: darkGreenSemantic, theme }),
    tokenColors: genTokens({ semantic: darkGreenSemantic, theme }),
  }
  const darkGreenItalic = {
    ...darkGreen,
    name: 'Xiaolu Abei Dark Green Italic',
    tokenColors: genTokens({ semantic: darkGreenSemantic, theme, fontStyle: 'italic' }),
  }

  const darkSoft = {
    name: 'Xiaolu Abei Dark Soft',
    base: 'vs-dark',
    semanticHighlighting: true,
    colors: genEditors({ semantic: darkSoftSemantic, theme }),
    tokenColors: genTokens({ semantic: darkSoftSemantic, theme }),
  }
  const darkSoftItalic = {
    ...darkSoft,
    name: 'Xiaolu Abei Dark Soft Italic',
    tokenColors: genTokens({ semantic: darkSoftSemantic, theme, fontStyle: 'italic' }),
  }
  const lightSoft = {
    name: 'Xiaolu Abei Light Soft',
    base: 'vs',
    semanticHighlighting: true,
    colors: genEditors({ semantic: lightSoftSemantic, theme: lightThemeColor }),
    tokenColors: genTokens({ semantic: lightSoftSemantic, theme: lightThemeColor }),
  }
  const lightSoftItalic = {
    ...lightSoft,
    name: 'Xiaolu Abei Light Soft Italic',
    tokenColors: genTokens({ semantic: lightSoftSemantic, theme: lightThemeColor, fontStyle: 'italic' }),
  }

  const light = {
    name: 'Xiaolu Abei Light',
    base: 'vs',
    semanticHighlighting: true,
    colors: genEditors({ semantic: lightSemantic, theme: lightThemeColor }),
    tokenColors: genTokens({ semantic: lightSemantic, theme: lightThemeColor }),
  }

  const lightItalic = {
    ...light,
    name: 'Xiaolu Abei Light Italic',
    tokenColors: genTokens({ semantic: lightSemantic, theme: lightThemeColor, fontStyle: 'italic' }),
  }

  const lightGreen = {
    name: 'Xiaolu Abei Light Green',
    base: 'vs',
    semanticHighlighting: true,
    colors: genEditors({ semantic: lightGreenSemantic, theme: lightThemeColor }),
    tokenColors: genTokens({ semantic: lightGreenSemantic, theme: lightThemeColor }),
  }

  const lightGreenItalic = {
    ...lightGreen,
    name: 'Xiaolu Abei Light Green Italic',
    tokenColors: genTokens({ semantic: lightGreenSemantic, theme: lightThemeColor, fontStyle: 'italic' }),
  }

  const outDir = path.resolve(__dirname, '../themes')
  const outDarkFile = path.join(outDir, 'Xiaolu Abei Dark-color-theme.json')
  const outDarkItalicFile = path.join(outDir, 'Xiaolu Abei Dark Italic-color-theme.json')

  const outDarkGreenFile = path.join(outDir, 'Xiaolu Abei Dark Green-color-theme.json')
  const outDarkGreenItalicFile = path.join(outDir, 'Xiaolu Abei Dark Green Italic-color-theme.json')

  const outDarkSoftFile = path.join(outDir, 'Xiaolu Abei Dark Soft-color-theme.json')
  const outDarkSoftItalicFile = path.join(outDir, 'Xiaolu Abei Dark Soft Italic-color-theme.json')

  const outLightFile = path.join(outDir, 'Xiaolu Abei Light-color-theme.json')
  const outLightItalicFile = path.join(outDir, 'Xiaolu Abei Light Italic-color-theme.json')

  const outLightSoftFile = path.join(outDir, 'Xiaolu Abei Light Soft-color-theme.json')
  const outLightSoftItalicFile = path.join(outDir, 'Xiaolu Abei Light Soft Italic-color-theme.json')

  const outLightGreenFile = path.join(outDir, 'Xiaolu Abei Light Green-color-theme.json')
  const outLightGreenItalicFile = path.join(outDir, 'Xiaolu Abei Light Green Italic-color-theme.json')

  try {
    await fs.mkdir(outDir, { recursive: true })
    await fs.writeFile(outDarkFile, JSON.stringify(dark, null, 2), 'utf-8')
    await fs.writeFile(outDarkItalicFile, JSON.stringify(darkItalic, null, 2), 'utf-8')
    await fs.writeFile(outDarkGreenFile, JSON.stringify(darkGreen, null, 2), 'utf-8')
    await fs.writeFile(outDarkGreenItalicFile, JSON.stringify(darkGreenItalic, null, 2), 'utf-8')
    await fs.writeFile(outDarkSoftFile, JSON.stringify(darkSoft, null, 2), 'utf-8')
    await fs.writeFile(outDarkSoftItalicFile, JSON.stringify(darkSoftItalic, null, 2), 'utf-8')
    await fs.writeFile(outLightSoftFile, JSON.stringify(lightSoft, null, 2), 'utf-8')
    await fs.writeFile(outLightSoftItalicFile, JSON.stringify(lightSoftItalic, null, 2), 'utf-8')
    await fs.writeFile(outLightFile, JSON.stringify(light, null, 2), 'utf-8')
    await fs.writeFile(outLightItalicFile, JSON.stringify(lightItalic, null, 2), 'utf-8')
    await fs.writeFile(outLightGreenFile, JSON.stringify(lightGreen, null, 2), 'utf-8')
    await fs.writeFile(outLightGreenItalicFile, JSON.stringify(lightGreenItalic, null, 2), 'utf-8')
    console.log('Theme file generated successfully!')
  }
  catch (err) {
    console.error('Error generating theme file:', err)
    process.exit(1)
  }
}

build()
