import { findSubstringInWraproundString } from './unique-substrings-in-wraparound-string.js'
import assert from 'assert'

describe('findSubstringInWraproundString()', () => {
    let tests = [
        { args: 'a', expected: 1 },
        { args: 'cac', expected: 2 },
        { args: 'zab', expected: 6 },
    ]

    tests.forEach((test) => {
        it(`findSubstringInWraproundString(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(findSubstringInWraproundString(test.args), test.expected)
        })
    })
})
