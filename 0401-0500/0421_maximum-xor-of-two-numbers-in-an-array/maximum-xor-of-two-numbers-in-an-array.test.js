import { findMaximumXOR } from './maximum-xor-of-two-numbers-in-an-array.js'
import assert from 'assert'

describe('findMaximumXOR()', () => {
    let tests = [
        { args: [3, 10, 5, 25, 2, 8], expected: 28 },
        { args: [0], expected: 0 },
        { args: [2, 4], expected: 6 },
        { args: [8, 10, 2], expected: 10 },
        { args: [14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70], expected: 127 },
    ]

    tests.forEach((test) => {
        it(`findMaximumXOR(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(findMaximumXOR(test.args), test.expected)
        })
    })
})
