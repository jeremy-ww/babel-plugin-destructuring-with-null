const { transform } = require('@babel/core')
const { readFileSync } = require('fs')
const plugin = require('../index')
const path = require('path')
const glob = require('glob')

describe('babel-plugin-destructuring-with-null', () => {
  const files = glob.sync('./test/fixtures/**/input.js')

  files.forEach(file => {
    const dir = file.replace(/[^/]+\.js$/g, '')
    const testcase = dir.match(/([^/]+?)\/$/)[1]
    const result = readFileSync(path.join(dir, 'output.js'), 'utf-8')

    const code = transform(readFileSync(file, 'utf-8'), {
      plugins: [
        require('@babel/plugin-proposal-object-rest-spread').default,
        plugin
      ]
    }).code.replace(__dirname, '{{. __dirname}}')

    test(`should work well with ${testcase}`, done => {
      expect(code).toBe(result)
      done()
    })
  })
})
