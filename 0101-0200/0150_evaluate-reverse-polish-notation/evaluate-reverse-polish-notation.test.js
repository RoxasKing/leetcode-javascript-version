import { evalRPN } from './evaluate-reverse-polish-notation.js'
import assert from 'assert'

describe('evalRPN()', () => {
    let tests = [
        { args: ["2", "1", "+", "3", "*"], expected: 9 },
        { args: ["4", "13", "5", "/", "+"], expected: 6 },
        { args: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"], expected: 22 },
    ]

    tests.forEach((test) => {
        it(`evalRPN(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(evalRPN(test.args), test.expected)
        })
    })
})
