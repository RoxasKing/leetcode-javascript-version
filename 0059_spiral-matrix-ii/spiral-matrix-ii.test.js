import { generateMatrix } from './spiral-matrix-ii.js'
import assert from 'assert'

describe('generateMatrix()', () => {
    let tests = [
        { args: 3, expected: [[1, 2, 3], [8, 9, 4], [7, 6, 5]] },
        { args: 1, expected: [[1]] },
    ]

    tests.forEach((test) => {
        it(`generateMatrix(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(generateMatrix(test.args), test.expected)
        })
    })
})
