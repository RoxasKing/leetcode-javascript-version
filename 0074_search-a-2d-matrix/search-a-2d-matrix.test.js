import { searchMatrix } from './search-a-2d-matrix.js'
import assert from 'assert'

describe('searchMatrix()', () => {
    let tests = [
        { args: { matrix: [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target: 3 }, expected: true },
        { args: { matrix: [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target: 13 }, expected: false },
    ]

    tests.forEach((test) => {
        let matrix = test.args.matrix, target = test.args.target
        it(`searchMatrix([${matrix}], ${target}) === ${test.expected}`, () => {
            assert.deepStrictEqual(searchMatrix(matrix, target), test.expected)
        })
    })
})
