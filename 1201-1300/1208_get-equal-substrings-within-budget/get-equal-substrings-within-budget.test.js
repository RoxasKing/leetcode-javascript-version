import { equalSubstring } from './get-equal-substrings-within-budget.js'
import assert from 'assert'

describe('equalSubstring()', () => {
    let tests = [
        { args: { s: 'abcd', t: 'bcdf', maxCost: 3 }, expected: 3 },
        { args: { s: 'abcd', t: 'cdef', maxCost: 3 }, expected: 1 },
        { args: { s: 'abcd', t: 'acde', maxCost: 0 }, expected: 1 },
    ]

    tests.forEach((test) => {
        let s = test.args.s, t = test.args.t, maxCost = test.args.maxCost
        it(`equalSubstring(${s}, ${t}) === ${test.expected}`, () => {
            assert.deepStrictEqual(equalSubstring(s, t, maxCost), test.expected)
        })
    })
})
