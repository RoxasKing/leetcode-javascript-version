import { romanToInt } from './roman-to-integer.js'
import assert from 'assert'

describe('romanToInt()', () => {
    let tests = [
        { args: 'III', expected: 3 },
        { args: 'IV', expected: 4 },
        { args: 'IX', expected: 9 },
        { args: 'LVIII', expected: 58 },
        { args: 'MCMXCIV', expected: 1994 },
    ]

    tests.forEach((test) => {
        it(`romanToInt(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(romanToInt(test.args), test.expected)
        })
    })
})
