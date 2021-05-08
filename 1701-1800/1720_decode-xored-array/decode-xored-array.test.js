import { decode } from './decode-xored-array.js'
import assert from 'assert'

describe('decode()', () => {
    let tests = [
        { args: { encoded: [1, 2, 3], first: 1 }, expected: [1, 0, 2, 1] },
        { args: { encoded: [6, 2, 7, 3], first: 4 }, expected: [4, 2, 0, 7, 4] },
    ]

    tests.forEach((test) => {
        let args = test.args
        let encoded = args.encoded, first = args.first
        it(`decode([${encoded}], ${first}) === ${test.expected}`, () => {
            assert.deepStrictEqual(decode(encoded, first), test.expected)
        })
    })
})
