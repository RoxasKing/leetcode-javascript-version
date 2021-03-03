import { isMonotonic } from './monotonic-array.js'
import assert from 'assert'

describe('isMonotonic()', () => {
    let tests = [
        { args: [1, 2, 2, 3], expected: true },
        { args: [6, 5, 4, 4], expected: true },
        { args: [1, 3, 2], expected: false },
        { args: [1, 2, 4, 5], expected: true },
        { args: [1, 1, 1], expected: true },
    ]

    tests.forEach((test) => {
        it(`isMonotonic(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(isMonotonic(test.args), test.expected)
        })
    })
})
