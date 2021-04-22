import { maxSumSubmatrix } from './max-sum-of-rectangle-no-larger-than-k.js'
import assert from 'assert'

describe('maxSumSubmatrix()', () => {
    let tests = [
        { args: { matrix: [[1, 0, 1], [0, -2, 3]], k: 2 }, expected: 2 },
        { args: { matrix: [[2, 2, -1]], k: 3 }, expected: 3 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let matrix = args.matrix, k = args.k
        it(`maxSumSubmatrix([${matrix}], ${k}) === ${test.expected}`, () => {
            assert.deepStrictEqual(maxSumSubmatrix(matrix, k), test.expected)
        })
    })
})
