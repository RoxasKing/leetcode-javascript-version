import { calculate } from './basic-calculator-ii.js'
import assert from 'assert'

describe('calculate()', () => {
    let tests = [
        { args: "3+2*2", expected: 7 },
        { args: " 3/2 ", expected: 1 },
        { args: " 3+5 / 2 ", expected: 5 },
    ]

    tests.forEach((test) => {
        it(`calculate(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(calculate(test.args), test.expected)
        })
    })
})
