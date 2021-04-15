import { findMaxAverage } from './maximum-average-subarray-i.js'
import assert from 'assert'

describe('findMaxAverage()', () => {
    let tests = [
        { args: { nums: [1, 12, -5, -6, 50, 3], k: 4 }, expected: 12.75 },
    ]

    tests.forEach((test) => {
        let nums = test.args.nums, k = test.args.k
        it(`findMaxAverage([${nums}], ${k}) === ${test.expected}`, () => {
            assert.deepStrictEqual(findMaxAverage(nums, k), test.expected)
        })
    })
})
