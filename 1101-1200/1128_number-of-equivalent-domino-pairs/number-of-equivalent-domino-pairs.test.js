import { numEquivDominoPairs } from './number-of-equivalent-domino-pairs.js'
import assert from 'assert'

describe('numEquivDominoPairs()', () => {
    let tests = [
        { args: [[1, 2], [2, 1], [3, 4], [5, 6]], expected: 1 },
        { args: [[2, 1], [1, 2], [2, 1], [3, 4], [5, 6]], expected: 3 },
    ]

    tests.forEach((test) => {
        it(`numEquivDominoPairs(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(numEquivDominoPairs(test.args), test.expected)
        })
    })
})
