import { findRedundantConnection } from './redundant-connection.js'
import assert from 'assert'

describe('findRedundantConnection()', () => {
    let tests = [
        { args: [[1, 2], [1, 3], [2, 3]], expected: [2, 3] },
        { args: [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]], expected: [1, 4] },
    ]

    tests.forEach((test) => {
        it(`findRedundantConnection(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(findRedundantConnection(test.args), test.expected)
        })
    })
})
