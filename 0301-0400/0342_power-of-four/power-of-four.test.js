import { isPowerOfFour } from './power-of-four.js'
import assert from 'assert'

describe('isPowerOfFour()', () => {
    let tests = [
        { args: 16, expected: true },
        { args: 5, expected: false },
        { args: 1, expected: true },
    ]

    tests.forEach((test) => {
        it(`isPowerOfFour(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(isPowerOfFour(test.args), test.expected)
        })
    })
})
