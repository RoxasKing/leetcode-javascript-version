import { countBits } from './counting-bits.js'
import assert from 'assert'

describe('countBits()', () => {
    let tests = [
        { args: 2, expected: [0, 1, 1] },
        { args: 5, expected: [0, 1, 1, 2, 1, 2] },
    ]

    tests.forEach((test) => {
        it(`countBits(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(countBits(test.args), test.expected)
        })
    })
})
