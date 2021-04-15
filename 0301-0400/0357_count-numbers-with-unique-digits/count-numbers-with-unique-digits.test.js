import { countNumbersWithUniqueDigits } from './count-numbers-with-unique-digits.js'
import assert from 'assert'

describe('countNumbersWithUniqueDigits()', () => {
    let tests = [
        { args: 2, expected: 91 },
        { args: 0, expected: 1 },
    ]

    tests.forEach((test) => {
        it(`countNumbersWithUniqueDigits(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(countNumbersWithUniqueDigits(test.args), test.expected)
        })
    })
})
