import { findMin } from './find-minimum-in-rotated-sorted-array-ii.js'
import assert from 'assert'

describe('findMin()', () => {
    let tests = [
        { args: [1, 3, 5], expected: 1 },
        { args: [2, 2, 2, 0, 1], expected: 0 },
    ]

    tests.forEach((test) => {
        it(`findMin(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(findMin(test.args), test.expected)
        })
    })
})
