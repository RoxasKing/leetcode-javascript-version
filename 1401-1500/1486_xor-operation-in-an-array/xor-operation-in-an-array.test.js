import { xorOperation } from './xor-operation-in-an-array.js'
import assert from 'assert'

describe('xorOperation()', () => {
    let tests = [
        { args: { n: 5, start: 0 }, expected: 8 },
        { args: { n: 4, start: 3 }, expected: 8 },
        { args: { n: 1, start: 7 }, expected: 7 },
        { args: { n: 10, start: 5 }, expected: 2 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let n = args.n, start = args.start
        it(`xorOperation(${n}, ${start}) === ${test.expected}`, () => {
            assert.deepStrictEqual(xorOperation(n, start), test.expected)
        })
    })
})
