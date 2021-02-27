import { firstUniqChar, firstUniqChar2 } from "./find-the-difference.js"
import assert from 'assert'

describe('firstUniqChar()', () => {
    let tests = [
        { args: 'leetcode', expected: 0 },
        { args: 'loveleetcode', expected: 2 },
        { args: 'aabbcc', expected: -1 },
    ]

    tests.forEach((test) => {
        it(`firstUniqChar(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(firstUniqChar(test.args), test.expected)
        })
    })
})

describe('firstUniqChar2()', () => {
    let tests = [
        { args: 'leetcode', expected: 0 },
        { args: 'loveleetcode', expected: 2 },
        { args: 'aabbcc', expected: -1 },
    ]

    tests.forEach((test) => {
        it(`firstUniqChar2(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(firstUniqChar2(test.args), test.expected)
        })
    })
})
