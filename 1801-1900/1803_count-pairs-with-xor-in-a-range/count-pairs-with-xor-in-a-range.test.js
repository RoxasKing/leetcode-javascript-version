import { countPairs } from './count-pairs-with-xor-in-a-range.js'
import assert from 'assert'

describe('countPairs()', () => {
    let tests = [
        { args: { nums: [1, 4, 2, 7], low: 2, high: 6 }, expected: 6 },
        { args: { nums: [9, 8, 4, 2, 1], low: 5, high: 14 }, expected: 8 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let nums = args.nums, low = args.low, high = args.high
        it(`countPairs([${nums}], ${low}, ${high}) === ${test.expected}`, () => {
            assert.deepStrictEqual(countPairs(nums, low, high), test.expected)
        })
    })
})
