import { minCost } from './paint-house-iii.js'
import assert from 'assert'

describe('minCost()', () => {
    let tests = [
        {
            args: {
                houses: [0, 0, 0, 0, 0],
                cost: [[1, 10], [10, 1], [10, 1], [1, 10], [5, 1]],
                m: 5, n: 2, target: 3
            },
            expected: 9
        },
        {
            args: {
                houses: [0, 2, 1, 2, 0],
                cost: [[1, 10], [10, 1], [10, 1], [1, 10], [5, 1]],
                m: 5, n: 2, target: 3
            },
            expected: 11
        },
        {
            args: {
                houses: [0, 0, 0, 0, 0],
                cost: [[1, 10], [10, 1], [1, 10], [10, 1], [1, 10]],
                m: 5, n: 2, target: 5
            },
            expected: 5
        },
        {
            args: {
                houses: [3, 1, 2, 3],
                cost: [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 1, 1]],
                m: 4, n: 3, target: 3
            },
            expected: -1
        },
    ]

    tests.forEach((test) => {
        let args = test.args
        let houses = args.houses, cost = args.cost, m = args.m, n = args.n, target = args.target
        it(`minCost([${houses}], [${cost}], ${m}, ${n}, ${target}) === ${test.expected}`, () => {
            assert.deepStrictEqual(minCost(houses, cost, m, n, target), test.expected)
        })
    })
})
