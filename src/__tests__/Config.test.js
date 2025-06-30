import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { describe, it, expect } from 'vitest'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

describe('index.html', () => {
  it('contains root element and correct title', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf-8')
    expect(html).toMatch(/<title>Quadratic Solver<\/title>/)
    expect(html).toMatch(/<div id="root"><\/div>/)
  })
})

describe('package.json', () => {
  it('contains project name and test script', () => {
    const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../package.json'), 'utf-8'))
    expect(pkg.name).toBe('quadratic-master')
    expect(pkg.scripts.test).toBe('vitest run')
  })
})
