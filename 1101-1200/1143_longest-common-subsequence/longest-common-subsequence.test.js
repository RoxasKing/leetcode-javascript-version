import { longestCommonSubsequence } from './longest-common-subsequence.js'
import assert from 'assert'

describe('longestCommonSubsequence()', () => {
    let tests = [
        { args: { text1: "abcde", text2: "ace" }, expected: 3 },
        { args: { text1: "abc", text2: "abc" }, expected: 3 },
        { args: { text1: "abc", text2: "def" }, expected: 0 },
    ]

    tests.forEach((test) => {
        let text1 = test.args.text1, text2 = test.args.text2
        it(`longestCommonSubsequence(${text1}, ${text2}) === ${test.expected}`, () => {
            assert.deepStrictEqual(longestCommonSubsequence(text1, text2), test.expected)
        })
    })
})
