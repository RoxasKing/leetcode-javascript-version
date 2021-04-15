import { minOperations } from './minimum-operations-to-reduce-x-to-zero.js'
import assert from 'assert'

describe('minOperations()', () => {
    let tests = [
        { args: { nums: [1, 1, 4, 2, 3], x: 5 }, expected: 2 },
        { args: { nums: [5, 6, 7, 8, 9], x: 4 }, expected: -1 },
        { args: { nums: [3, 2, 20, 1, 1, 3], x: 10 }, expected: 5 },
    ]

    tests.forEach((test) => {
        let nums = test.args.nums, x = test.args.x
        it(`minOperations([${nums}], ${x}) === ${test.expected}`, () => {
            assert.deepStrictEqual(minOperations(nums, x), test.expected)
        })
    })
})
