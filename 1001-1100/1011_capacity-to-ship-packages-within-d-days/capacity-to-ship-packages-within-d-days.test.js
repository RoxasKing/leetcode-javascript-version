import { shipWithinDays } from './capacity-to-ship-packages-within-d-days.js'
import assert from 'assert'

describe('shipWithinDays()', () => {
    let tests = [
        { args: { weights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], D: 5 }, expected: 15 },
        { args: { weights: [3, 2, 2, 4, 1, 4], D: 3 }, expected: 6 },
        { args: { weights: [1, 2, 3, 1, 1], D: 4 }, expected: 3 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let weights = args.weights, D = args.D
        it(`shipWithinDays([${weights}], ${D}) === ${test.expected}`, () => {
            assert.deepStrictEqual(shipWithinDays(weights, D), test.expected)
        })
    })
})
