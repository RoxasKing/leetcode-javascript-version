import { partition } from './palindrome-partitioning.js'
import assert from 'assert'

describe('partition()', () => {
    let tests = [
        { args: "aab", expected: [["a", "a", "b"], ["aa", "b"]] },
        { args: "a", expected: [["a"]] },
    ]

    tests.forEach((test) => {
        it(`partition(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(partition(test.args), test.expected)
        })
    })
})
