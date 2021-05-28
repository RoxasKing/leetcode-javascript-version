import { reverseParentheses } from './reverse-substrings-between-each-pair-of-parentheses.js'
import assert from 'assert'

describe('reverseParentheses()', () => {
    let tests = [
        { args: '(abcd)', expected: 'dcba' },
        { args: '(u(love)i)', expected: 'iloveu' },
        { args: '(ed(et(oc))el)', expected: 'leetcode' },
        { args: 'a(bcdefghijkl(mno)p)q', expected: 'apmnolkjihgfedcbq' },
    ]

    tests.forEach((test) => {
        it(`reverseParentheses(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(reverseParentheses(test.args), test.expected)
        })
    })
})
