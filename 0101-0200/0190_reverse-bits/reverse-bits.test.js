import { reverseBits } from './reverse-bits.js'
import assert from 'assert'

describe('reverseBits()', () => {
    let tests = [
        { args: 0b00000010100101000001111010011100, expected: 964176192 },
        { args: 0b11111111111111111111111111111101, expected: 3221225471 },
    ]

    tests.forEach((test) => {
        it(`reverseBits(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(reverseBits(test.args), test.expected)
        })
    })
})
