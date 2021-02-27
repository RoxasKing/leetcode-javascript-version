import { fib } from "./fibonacci-number.js"
import assert from 'assert'

describe('fib()', () => {
    let tests = [
        { args: 2, expected: 1 },
        { args: 3, expected: 2 },
        { args: 4, expected: 3 },
    ]

    tests.forEach((test) => {
        it(`fib(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(fib(test.args), test.expected)
        })
    })
})
