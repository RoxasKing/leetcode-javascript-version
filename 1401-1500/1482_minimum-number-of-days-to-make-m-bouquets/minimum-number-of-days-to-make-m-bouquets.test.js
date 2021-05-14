import { minDays } from './minimum-number-of-days-to-make-m-bouquets.js'
import assert from 'assert'

describe('minDays()', () => {
    let tests = [
        { args: { bloomDay: [1, 10, 3, 10, 2], m: 3, k: 1 }, expected: 3 },
        { args: { bloomDay: [1, 10, 3, 10, 2], m: 3, k: 2 }, expected: -1 },
        { args: { bloomDay: [7, 7, 7, 7, 12, 7, 7], m: 2, k: 3 }, expected: 12 },
        { args: { bloomDay: [1000000000, 1000000000], m: 1, k: 1 }, expected: 1000000000 },
        { args: { bloomDay: [1, 10, 2, 9, 3, 8, 4, 7, 5, 6], m: 4, k: 2 }, expected: 9 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let bloomDay = args.bloomDay, m = args.m, k = args.k
        it(`minDays([${bloomDay}], ${m}, ${k}) === ${test.expected}`, () => {
            assert.deepStrictEqual(minDays(bloomDay, m, k), test.expected)
        })
    })
})
