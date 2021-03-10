import { beautySum } from './sum-of-beauty-of-all-substrings.js'
import assert from 'assert'

describe('beautySum()', () => {
    let tests = [
        { args: "aabcb", expected: 5 },
        { args: "aabcbaa", expected: 17 },
    ]

    tests.forEach((test) => {
        it(`beautySum(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(beautySum(test.args), test.expected)
        })
    })
})
