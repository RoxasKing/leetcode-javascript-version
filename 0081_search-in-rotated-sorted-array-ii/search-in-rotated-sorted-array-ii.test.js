import { search } from './search-in-rotated-sorted-array-ii.js'
import assert from 'assert'

describe('search()', () => {
    let tests = [
        { args: { nums: [2, 5, 6, 0, 0, 1, 2], target: 0 }, expected: true },
        { args: { nums: [2, 5, 6, 0, 0, 1, 2], target: 3 }, expected: false },
    ]

    tests.forEach((test) => {
        let nums = test.args.nums, target = test.args.target
        it(`search([${nums}], ${target}) === ${test.expected}`, () => {
            assert.deepStrictEqual(search(nums, target), test.expected)
        })
    })
})
