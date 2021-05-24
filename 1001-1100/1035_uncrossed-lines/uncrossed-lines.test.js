import { maxUncrossedLines } from './uncrossed-lines.js'
import assert from 'assert'

describe('maxUncrossedLines()', () => {
    let tests = [
        { args: { nums1: [1, 4, 2], nums2: [1, 2, 4] }, expected: 2 },
        { args: { nums1: [2, 5, 1, 2, 5], nums2: [10, 5, 2, 1, 5, 2] }, expected: 3 },
        { args: { nums1: [1, 3, 7, 1, 7, 5], nums2: [1, 9, 2, 5, 1] }, expected: 2 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let nums1 = args.nums1, nums2 = args.nums2
        it(`maxUncrossedLines([${nums1}], [${nums2}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(maxUncrossedLines(nums1, nums2), test.expected)
        })
    })
})
