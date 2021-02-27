import { checkPossibility } from './non-decreasing-array.js'
import assert from 'assert'

describe('checkPossibility()', () => {
    let tests = [
        { args: [4, 2, 3], expected: true },
        { args: [4, 2, 1], expected: false },
        { args: [1, 2, 4, 3, 4, 5], expected: true },
        { args: [1, 2, 4, 1, 4, 5], expected: true },
        { args: [1, 2, 4, 1, 3, 5], expected: false },
        { args: [1, 2, 4, 2, 3, 5], expected: true },
    ]

    tests.forEach((test) => {
        it(`checkPossibility(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(checkPossibility(test.args), test.expected)
        })
    })
})
