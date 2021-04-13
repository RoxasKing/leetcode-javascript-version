import { countVowelStrings } from './count-sorted-vowel-strings.js'
import assert from 'assert'

describe('countVowelStrings()', () => {
    let tests = [
        { args: 1, expected: 5 },
        { args: 2, expected: 15 },
        { args: 33, expected: 66045 },
    ]

    tests.forEach((test) => {
        it(`countVowelStrings(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(countVowelStrings(test.args), test.expected)
        })
    })
})
