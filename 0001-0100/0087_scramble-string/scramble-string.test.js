import { isScramble } from './scramble-string.js'
import assert from 'assert'

describe('isScramble()', () => {
    let tests = [
        { args: { s1: "great", s2: "rgeat" }, expected: true },
        { args: { s1: "abcde", s2: "caebd" }, expected: false },
        { args: { s1: "a", s2: "a" }, expected: true },
    ]

    tests.forEach((test) => {
        let args = test.args
        let s1 = args.s1, s2 = args.s2
        it(`isScramble(${s1}, ${s2}) === ${test.expected}`, () => {
            assert.deepStrictEqual(isScramble(s1, s2), test.expected)
        })
    })
})
