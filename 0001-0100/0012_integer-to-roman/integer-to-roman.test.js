import { intToRoman } from './integer-to-roman.js'
import assert from 'assert'

describe('intToRoman()', () => {
    let tests = [
        { args: 3, expected: 'III' },
        { args: 4, expected: 'IV' },
        { args: 9, expected: 'IX' },
        { args: 58, expected: 'LVIII' },
        { args: 1994, expected: 'MCMXCIV' },
    ]

    tests.forEach((test) => {
        it(`intToRoman(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(intToRoman(test.args), test.expected)
        })
    })
})
