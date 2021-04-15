import { rob } from './house-robber-ii.js'
import assert from 'assert'

describe('rob()', () => {
    let tests = [
        { args: [2, 3, 2], expected: 3 },
        { args: [1, 2, 3, 1], expected: 4 },
        { args: [0], expected: 0 },
    ]

    tests.forEach((test) => {
        it(`rob(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(rob(test.args), test.expected)
        })
    })
})
