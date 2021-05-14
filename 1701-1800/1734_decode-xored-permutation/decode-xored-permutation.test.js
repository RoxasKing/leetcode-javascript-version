import { decode } from './decode-xored-permutation.js'
import assert from 'assert'

describe('decode()', () => {
    let tests = [
        { args: [3, 1], expected: [1, 2, 3] },
        { args: [6, 5, 4, 6], expected: [2, 4, 1, 5, 3] },
    ]

    tests.forEach((test) => {
        it(`decode(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(decode(test.args), test.expected)
        })
    })
})
