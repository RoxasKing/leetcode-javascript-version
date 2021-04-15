import { minElements } from './minimum-elements-to-add-to-form-a-given-sum.js'
import assert from 'assert'

describe('minElements()', () => {
    let tests = [
        { args: { nums: [1, -1, 1], limit: 3, goal: -4 }, expected: 2 },
        { args: { nums: [1, -10, 9, 1], limit: 100, goal: 0 }, expected: 1 },
    ]

    tests.forEach((test) => {
        let nums = test.args.nums, limit = test.args.limit, goal = test.args.goal
        it(`minElements([${nums}], ${limit}, ${goal}) === ${test.expected}`, () => {
            assert.deepStrictEqual(minElements(nums, limit, goal), test.expected)
        })
    })
})
