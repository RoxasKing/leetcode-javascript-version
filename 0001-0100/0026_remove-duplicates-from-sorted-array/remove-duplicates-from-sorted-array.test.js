import { removeDuplicates } from './remove-duplicates-from-sorted-array.js'
import assert from 'assert'

describe('removeDuplicates()', () => {
    let tests = [
        { args: [1, 1, 2], expected: 2 },
        { args: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: 5 },
        { args: [1], expected: 1 },
        { args: [], expected: 0 },
    ]

    tests.forEach((test) => {
        it(`removeDuplicates(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(removeDuplicates(test.args), test.expected)
        })
    })
})
