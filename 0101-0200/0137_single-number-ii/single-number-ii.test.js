import { singleNumber } from './single-number-ii.js'
import assert from 'assert'

describe('singleNumber()', () => {
    let tests = [
        { args: [2, 2, 3, 2], expected: 3 },
        { args: [0, 1, 0, 1, 0, 1, 99], expected: 99 },
    ]

    tests.forEach((test) => {
        it(`singleNumber(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(singleNumber(test.args), test.expected)
        })
    })
})
