import { minChanges } from './make-the-xor-of-all-segments-equal-to-zero.js'
import assert from 'assert'

describe('minChanges()', () => {
    let tests = [
        { args: { nums: [1, 2, 0, 3, 0], k: 1 }, expected: 3 },
        { args: { nums: [3, 4, 5, 2, 1, 7, 3, 4, 7], k: 3 }, expected: 3 },
        { args: { nums: [1, 2, 4, 1, 2, 5, 1, 2, 6], k: 3 }, expected: 3 },
    ]

    tests.forEach((test) => {
        let nums = test.args.nums, k = test.args.k
        it(`minChanges([${nums}], ${k}) === ${test.expected}`, () => {
            assert.deepStrictEqual(minChanges(nums, k), test.expected)
        })
    })
})
