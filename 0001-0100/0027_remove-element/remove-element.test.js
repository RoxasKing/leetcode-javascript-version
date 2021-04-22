import { removeElement } from './remove-element.js'
import assert from 'assert'

describe('removeElement()', () => {
    let tests = [
        { args: { nums: [3, 2, 2, 3], val: 3 }, expected: 2 },
        { args: { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2 }, expected: 5 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let nums = args.nums, val = args.val
        it(`removeElement([${nums}], ${val}) === ${test.expected}`, () => {
            assert.deepStrictEqual(removeElement(nums, val), test.expected)
        })
    })
})
