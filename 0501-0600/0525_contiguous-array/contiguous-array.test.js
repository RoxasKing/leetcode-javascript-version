import { findMaxLength } from './contiguous-array.js'
import assert from 'assert'

describe('findMaxLength()', () => {
    let tests = [
        { args: [0, 1], expected: 2 },
        { args: [0, 1, 0], expected: 2 },
    ]

    tests.forEach((test) => {
        it(`findMaxLength(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(findMaxLength(test.args), test.expected)
        })
    })
})
