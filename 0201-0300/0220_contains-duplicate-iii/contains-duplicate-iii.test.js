import { containsNearbyAlmostDuplicate } from './contains-duplicate-iii.js'
import assert from 'assert'

describe('containsNearbyAlmostDuplicate()', () => {
    let tests = [
        { args: { nums: [1, 2, 3, 1], k: 3, t: 0 }, expected: true },
        { args: { nums: [1, 0, 1, 1], k: 1, t: 2 }, expected: true },
        { args: { nums: [1, 5, 9, 1, 5, 9], k: 2, t: 3 }, expected: false },
    ]

    tests.forEach((test) => {
        let args = test.args
        let nums = args.nums, k = args.k, t = args.t
        it(`containsNearbyAlmostDuplicate([${nums}], ${k}, ${t}) === ${test.expected}`, () => {
            assert.deepStrictEqual(containsNearbyAlmostDuplicate(nums, k, t), test.expected)
        })
    })
})
