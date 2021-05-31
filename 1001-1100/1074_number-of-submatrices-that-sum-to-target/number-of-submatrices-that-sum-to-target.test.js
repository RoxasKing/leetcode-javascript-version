import { numSubmatrixSumTarget } from './number-of-submatrices-that-sum-to-target.js'
import assert from 'assert'

describe('numSubmatrixSumTarget()', () => {
    let tests = [
        { args: { matrix: [[0, 1, 0], [1, 1, 1], [0, 1, 0]], target: 0 }, expected: 4 },
        { args: { matrix: [[1, -1], [-1, 1]], target: 0 }, expected: 5 },
        { args: { matrix: [[904]], target: 0 }, expected: 0 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let matrix = args.matrix, target = args.target
        it(`numSubmatrixSumTarget([${matrix}], ${target}) === ${test.expected}`, () => {
            assert.deepStrictEqual(numSubmatrixSumTarget(matrix, target), test.expected)
        })
    })
})
