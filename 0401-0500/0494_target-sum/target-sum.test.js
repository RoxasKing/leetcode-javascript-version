import { findTargetSumWays } from './target-sum.js'
import assert from 'assert'

describe('findTargetSumWays()', () => {
    let tests = [
        { args: { nums: [1, 1, 1, 1, 1], target: 3 }, expected: 5 },
        { args: { nums: [1], target: 1 }, expected: 1 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let nums = args.nums, target = args.target
        it(`findTargetSumWays([${nums}], ${target}) === ${test.expected}`, () => {
            assert.deepStrictEqual(findTargetSumWays(nums, target), test.expected)
        })
    })
})
