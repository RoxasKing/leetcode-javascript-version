import { calculate } from './basic-calculator.js'
import assert from 'assert'

describe('calculate()', () => {
    let tests = [
        { args: '1 + 1', expected: 2 },
        { args: ' 2-1 + 2 ', expected: 3 },
        { args: '(1+(4+5+2)-3)+(6+8)', expected: 23 },
    ]

    tests.forEach((test) => {
        it(`calculate(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(calculate(test.args), test.expected)
        })
    })
})
