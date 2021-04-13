import { nthUglyNumber } from './ugly-number-ii.js'
import assert from 'assert'

describe('nthUglyNumber()', () => {
    let tests = [
        { args: 10, expected: 12 },
        { args: 1, expected: 1 },
    ]

    tests.forEach((test) => {
        it(`nthUglyNumber(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(nthUglyNumber(test.args), test.expected)
        })
    })
})
