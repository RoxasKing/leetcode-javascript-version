import { maxSatisfied } from './grumpy-bookstore-owner.js'
import assert from 'assert'

describe('maxSatisfied()', () => {
    let tests = [
        {
            args: {
                customers: [1, 0, 1, 2, 1, 1, 7, 5],
                grumpy: [0, 1, 0, 1, 0, 1, 0, 1],
                X: 3
            },
            expected: 16
        },
    ]

    tests.forEach((test) => {
        let customers = test.args.customers, grumpy = test.args.grumpy, X = test.args.X
        it(`maxSatisfied([${customers}], [${grumpy}], ${X}) === ${test.expected}`, () => {
            assert.deepStrictEqual(maxSatisfied(customers, grumpy, X), test.expected)
        })
    })
})
