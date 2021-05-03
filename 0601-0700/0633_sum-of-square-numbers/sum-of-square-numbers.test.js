import { judgeSquareSum } from './sum-of-square-numbers.js'
import assert from 'assert'

describe('judgeSquareSum()', () => {
    let tests = [
        { args: 5, expected: true },
        { args: 3, expected: false },
        { args: 4, expected: true },
        { args: 2, expected: true },
        { args: 1, expected: true },
    ]

    tests.forEach((test) => {
        it(`judgeSquareSum(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(judgeSquareSum(test.args), test.expected)
        })
    })
})
