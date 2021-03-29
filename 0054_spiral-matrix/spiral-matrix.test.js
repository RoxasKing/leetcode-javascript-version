import { spiralOrder } from './spiral-matrix.js'
import assert from 'assert'

describe('spiralOrder()', () => {
    let tests = [
        { args: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], expected: [1, 2, 3, 6, 9, 8, 7, 4, 5] },
        { args: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] },
    ]

    tests.forEach((test) => {
        it(`spiralOrder(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(spiralOrder(test.args), test.expected)
        })
    })
})
