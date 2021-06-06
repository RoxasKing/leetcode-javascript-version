import { findMaxForm } from './ones-and-zeroes.js'
import assert from 'assert'

describe('findMaxForm()', () => {
    let tests = [
        { args: { strs: ['10', '0001', '111001', '1', '0'], m: 5, n: 3 }, expected: 4 },
        { args: { strs: ['10', '0', '1'], m: 1, n: 1 }, expected: 2 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let strs = args.strs, m = args.m, n = args.n
        it(`findMaxForm([${strs}], ${m}, ${n}) === ${test.expected}`, () => {
            assert.deepStrictEqual(findMaxForm(strs, m, n), test.expected)
        })
    })
})
