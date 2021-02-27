import { medianSlidingWindow } from './sliding-window-median.js'
import assert from 'assert'

describe('medianSlidingWindow()', () => {
    let tests = [
        {
            args: {
                nums: [1, 3, -1, -3, 5, 3, 6, 7],
                k: 2
            },
            expected: [2.000, 1.000, -2.000, 1.000, 4.000, 4.500, 6.500]
        },
        {
            args: {
                nums: [1, 3, -1, -3, 5, 3, 6, 7],
                k: 3
            },
            expected: [1, -1, -1, 3, 5, 6]
        },
        {
            args: {
                nums: [1, 3, -1, -3, 5, 3, 6, 7],
                k: 4
            },
            expected: [0.000, 1.000, 1.000, 4.000, 5.500]
        },
        {
            args: {
                nums: [1, 3, -1, -3, 5, 3, 6, 7],
                k: 5
            },
            expected: [1.000, 3.000, 3.000, 5.000]
        },
        {
            args: {
                nums: [1, 3, -1, -3, 5, 3, 6, 7],
                k: 6
            },
            expected: [2.000, 3.000, 4.000]
        },
    ]

    tests.forEach((test) => {
        let nums = test.args.nums, k = test.args.k
        it(`medianSlidingWindow([${nums}], ${k}) === ${test.expected}`, () => {
            assert.deepStrictEqual(medianSlidingWindow(nums, k), test.expected)
        })
    })
})
