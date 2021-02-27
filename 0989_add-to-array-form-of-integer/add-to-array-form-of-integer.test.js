import { addToArrayForm } from './add-to-array-form-of-integer.js'
import assert from 'assert'

describe('addToArrayForm()', () => {
    let tests = [
        { args: { A: [1, 2, 0, 0], K: 34 }, expected: [1, 2, 3, 4] },
        { args: { A: [2, 7, 4], K: 181 }, expected: [4, 5, 5] },
        { args: { A: [2, 1, 5], K: 806 }, expected: [1, 0, 2, 1] },
        {
            args: {
                A: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
                K: 1
            },
            expected: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
    ]

    tests.forEach((test) => {
        let A = test.args.A, K = test.args.K
        it(`addToArrayForm([${A}], ${K}) === ${test.expected}`, () => {
            assert.deepStrictEqual(addToArrayForm(A, K), test.expected)
        })
    })
})
