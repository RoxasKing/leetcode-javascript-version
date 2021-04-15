import { merge } from './merge-sorted-array.js'
import assert from 'assert'

describe('merge()', () => {
    let tests = [
        { args: { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 }, expected: [1, 2, 2, 3, 5, 6] },
        { args: { nums1: [1], m: 1, nums2: [], n: 0 }, expected: [1] },
    ]

    tests.forEach((test) => {
        let nums1 = test.args.nums1, m = test.args.m, nums2 = test.args.nums2, n = test.args.n
        it(`merge([${nums1}], ${m}, [${nums2}], ${n}) === ${test.expected}`, () => {
            merge(nums1, m, nums2, n)
            assert.deepStrictEqual(nums1, test.expected)
        })
    })
})
