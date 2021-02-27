import { removeStones } from './most-stones-removed-with-same-row-or-column.js'
import assert from 'assert'

describe('removeStones()', () => {
    let tests = [
        { args: [[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]], expected: 5 },
        { args: [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]], expected: 3 },
        { args: [[0, 0]], expected: 0 },
    ]

    tests.forEach((test) => {
        it(`removeStones(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(removeStones(test.args), test.expected)
        })
    })
})
