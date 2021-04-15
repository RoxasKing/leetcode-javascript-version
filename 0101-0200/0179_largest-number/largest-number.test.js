import { largestNumber } from './largest-number.js'
import assert from 'assert'

describe('largestNumber()', () => {
    let tests = [
        { args: [10, 2], expected: '210' },
        { args: [3, 30, 34, 5, 9], expected: '9534330' },
        { args: [1], expected: '1' },
        { args: [10], expected: '10' },
    ]

    tests.forEach((test) => {
        it(`largestNumber(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(largestNumber(test.args), test.expected)
        })
    })
})
