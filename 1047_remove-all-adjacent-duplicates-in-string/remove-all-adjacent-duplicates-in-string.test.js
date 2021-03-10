import { removeDuplicates } from './remove-all-adjacent-duplicates-in-string.js'
import assert from 'assert'

describe('removeDuplicates()', () => {
    let tests = [
        { args: "abbaca", expected: "ca" },
        { args: "aabbaca", expected: "aca" },
    ]

    tests.forEach((test) => {
        it(`removeDuplicates(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(removeDuplicates(test.args), test.expected)
        })
    })
})
