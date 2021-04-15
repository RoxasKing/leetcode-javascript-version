import { findLengthOfLCIS } from './longest-continuous-increasing-subsequence.js'
import assert from 'assert'

describe('findLengthOfLCIS()', () => {
    let tests = [
        { args: [1, 3, 5, 4, 7], expected: 3 },
        { args: [2, 2, 2, 2, 2], expected: 1 },
        { args: [], expected: 0 },
    ]

    tests.forEach((test) => {
        it(`findLengthOfLCIS(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(findLengthOfLCIS(test.args), test.expected)
        })
    })
})
