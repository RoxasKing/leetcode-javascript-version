import { numDistinct } from './distinct-subsequences.js'
import assert from 'assert'

describe('numDistinct()', () => {
    let tests = [
        { args: { s: "rabbbit", t: "rabbit" }, expected: 3 },
        { args: { s: "babgbag", t: "bag" }, expected: 5 },
    ]

    tests.forEach((test) => {
        let s = test.args.s, t = test.args.t
        it(`numDistinct(${s}, ${t}) === ${test.expected}`, () => {
            assert.deepStrictEqual(numDistinct(s, t), test.expected)
        })
    })
})
