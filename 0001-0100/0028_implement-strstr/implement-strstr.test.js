import { strStr } from './implement-strstr.js'
import assert from 'assert'

describe('strStr()', () => {
    let tests = [
        { args: { haystack: "hello", needle: "ll" }, expected: 2 },
        { args: { haystack: "aaaaa", needle: "bba" }, expected: -1 },
        { args: { haystack: "", needle: "" }, expected: 0 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let haystack = args.haystack, needle = args.needle
        it(`strStr(${haystack}, ${needle}) === ${test.expected}`, () => {
            assert.deepStrictEqual(strStr(haystack, needle), test.expected)
        })
    })
})
