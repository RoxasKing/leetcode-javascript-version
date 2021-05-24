import { maximizeXor } from './maximum-xor-with-an-element-from-array.js'
import assert from 'assert'

describe('maximizeXor()', () => {
    let tests = [
        { args: { nums: [0, 1, 2, 3, 4], queries: [[3, 1], [1, 3], [5, 6]] }, expected: [3, 3, 7] },
        { args: { nums: [5, 2, 4, 6, 6, 3], queries: [[12, 4], [8, 1], [6, 3]] }, expected: [15, -1, 5] },
    ]

    tests.forEach((test) => {
        let args = test.args
        let nums = args.nums, queries = args.queries
        it(`maximizeXor([${nums}], [${queries}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(maximizeXor(nums, queries), test.expected)
        })
    })
})
