import { strangePrinter } from './strange-printer.js'
import assert from 'assert'

describe('strangePrinter()', () => {
    let tests = [
        { args: "aaabbb", expected: 2 },
        { args: "aba", expected: 2 },
    ]

    tests.forEach((test) => {
        it(`strangePrinter(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(strangePrinter(test.args), test.expected)
        })
    })
})
