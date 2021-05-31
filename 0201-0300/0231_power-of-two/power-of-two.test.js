import { isPowerOfTwo } from './power-of-two.js'
import assert from 'assert'

describe('isPowerOfTwo()', () => {
    let tests = [
        { args: 1, expected: true },
        { args: 16, expected: true },
        { args: 3, expected: false },
        { args: 4, expected: true },
        { args: 5, expected: false },
    ]

    tests.forEach((test) => {
        it(`isPowerOfTwo(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(isPowerOfTwo(test.args), test.expected)
        })
    })
})
