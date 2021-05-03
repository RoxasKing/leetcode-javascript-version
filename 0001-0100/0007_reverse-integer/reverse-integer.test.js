import { reverse } from './reverse-integer.js'
import assert from 'assert'

describe('reverse()', () => {
    let tests = [
        { args: 123, expected: 321 },
        { args: -123, expected: -321 },
        { args: 120, expected: 21 },
        { args: 0, expected: 0 },
    ]

    tests.forEach((test) => {
        it(`reverse(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(reverse(test.args), test.expected)
        })
    })
})
