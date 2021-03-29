import { setZeroes } from './set-matrix-zeroes.js'
import assert from 'assert'

describe('setZeroes()', () => {
    let tests = [
        { args: [[1, 1, 1], [1, 0, 1], [1, 1, 1]], expected: [[1, 0, 1], [0, 0, 0], [1, 0, 1]] },
        { args: [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]], expected: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]] },
    ]

    tests.forEach((test) => {
        it(`setZeroes(${test.args}) === ${test.expected}`, () => {
            setZeroes(test.args)
            assert.deepStrictEqual(test.args, test.expected)
        })
    })
})
