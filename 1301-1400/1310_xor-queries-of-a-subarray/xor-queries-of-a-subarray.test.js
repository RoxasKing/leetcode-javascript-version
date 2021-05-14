import { xorQueries } from './xor-queries-of-a-subarray.js'
import assert from 'assert'

describe('xorQueries()', () => {
    let tests = [
        { args: { arr: [1, 3, 4, 8], queries: [[0, 1], [1, 2], [0, 3], [3, 3]] }, expected: [2, 7, 14, 8] },
        { args: { arr: [4, 8, 2, 10], queries: [[2, 3], [1, 3], [0, 0], [0, 3]] }, expected: [8, 0, 4, 4] },
    ]

    tests.forEach((test) => {
        let args = test.args
        let arr = args.arr, queries = args.queries
        it(`xorQueries([${arr}], [${queries}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(xorQueries(arr, queries), test.expected)
        })
    })
})
