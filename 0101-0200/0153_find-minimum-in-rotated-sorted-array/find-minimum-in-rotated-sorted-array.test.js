import { findMin } from './find-minimum-in-rotated-sorted-array.js'
import assert from 'assert'

describe('findMin()', () => {
    let tests = [
        { args: [3, 4, 5, 1, 2], expected: 1 },
        { args: [4, 5, 6, 7, 0, 1, 2], expected: 0 },
        { args: [11, 13, 15, 17], expected: 11 },
    ]

    tests.forEach((test) => {
        it(`findMin(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(findMin(test.args), test.expected)
        })
    })
})
