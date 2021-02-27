import { isToeplitzMatrix } from './toeplitz-matrix.js'
import assert from 'assert'

describe('isToeplitzMatrix()', () => {
    let tests = [
        { args: [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]], expected: true },
        { args: [[1, 2], [2, 2]], expected: false },
    ]

    tests.forEach((test) => {
        it(`isToeplitzMatrix(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(isToeplitzMatrix(test.args), test.expected)
        })
    })
})
