import { combinationSum4 } from './combination-sum-iv.js'
import assert from 'assert'

describe('combinationSum4()', () => {
    let tests = [
        { args: { nums: [1, 2, 3], target: 4 }, expected: 7 },
        { args: { nums: [9], target: 3 }, expected: 0 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let nums = args.nums, target = args.target
        it(`combinationSum4([${nums}], ${target}) === ${test.expected}`, () => {
            assert.deepStrictEqual(combinationSum4(nums, target), test.expected)
        })
    })
})
