import { clumsy } from './clumsy-factorial.js'
import assert from 'assert'

describe('clumsy()', () => {
    let tests = [
        { args: 4, expected: 7 },
        { args: 10, expected: 12 },
    ]

    tests.forEach((test) => {
        it(`clumsy(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(clumsy(test.args), test.expected)
        })
    })
})
