import { checkSubarraySum } from './continuous-subarray-sum.js'
import assert from 'assert'

describe('checkSubarraySum()', () => {
    let tests = [
        { args: { nums: [23, 2, 4, 6, 7], k: 6 }, expected: true },
        { args: { nums: [23, 2, 6, 4, 7], k: 6 }, expected: true },
        { args: { nums: [23, 2, 6, 4, 7], k: 13 }, expected: false },
    ]

    tests.forEach((test) => {
        let args = test.args
        let nums = args.nums, k = args.k
        it(`checkSubarraySum([${nums}], ${k}) === ${test.expected}`, () => {
            assert.deepStrictEqual(checkSubarraySum(nums, k), test.expected)
        })
    })
})
