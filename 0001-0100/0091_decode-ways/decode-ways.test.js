import { numDecodings } from './decode-ways.js'
import assert from 'assert'

describe('numDecodings()', () => {
    let tests = [
        { args: "12", expected: 2 },
        { args: "226", expected: 3 },
        { args: "0", expected: 0 },
        { args: "06", expected: 0 },
    ]

    tests.forEach((test) => {
        it(`numDecodings(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(numDecodings(test.args), test.expected)
        })
    })
})
