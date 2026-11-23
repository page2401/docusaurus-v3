import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const katexDist = path.join(rootDir, 'node_modules', 'katex', 'dist')
const targetDir = path.join(rootDir, 'static', 'katex')
const targetFonts = path.join(targetDir, 'fonts')

fs.mkdirSync(targetFonts, { recursive: true })
fs.copyFileSync(
  path.join(katexDist, 'katex.min.css'),
  path.join(targetDir, 'katex.min.css')
)

for (const file of fs.readdirSync(path.join(katexDist, 'fonts'))) {
  fs.copyFileSync(
    path.join(katexDist, 'fonts', file),
    path.join(targetFonts, file)
  )
}
