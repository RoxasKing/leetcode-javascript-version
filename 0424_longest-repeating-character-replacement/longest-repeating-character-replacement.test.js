import { characterReplacement } from './longest-repeating-character-replacement.js'
import assert from 'assert'

describe('characterReplacement()', () => {
    let tests = [
        { args: { s: "ABAB", k: 2 }, expected: 4 },
        { args: { s: "AABABBA", k: 1 }, expected: 4 },
    ]

    tests.forEach((test) => {
        let s = test.args.s, k = test.args.k
        it(`characterReplacement(${s}, ${k}) === ${test.expected}`, () => {
            assert.deepStrictEqual(characterReplacement(s, k), test.expected)
        })
    })
})
