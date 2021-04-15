import { removeDuplicates } from './remove-duplicates-from-sorted-array-ii.js'
import assert from 'assert'

describe('removeDuplicates()', () => {
    let tests = [
        { args: [1, 1, 1, 2, 2, 3], expected: 5 },
        { args: [0, 0, 1, 1, 1, 1, 2, 3, 3], expected: 7 },
    ]

    tests.forEach((test) => {
        it(`removeDuplicates(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(removeDuplicates(test.args), test.expected)
        })
    })
})
