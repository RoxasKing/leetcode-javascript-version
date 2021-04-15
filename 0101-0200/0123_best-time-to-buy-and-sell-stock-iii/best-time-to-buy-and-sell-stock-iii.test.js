import { maxProfit } from './best-time-to-buy-and-sell-stock-iii.js'
import assert from 'assert'

describe('maxProfit()', () => {
    let tests = [
        { args: [3, 3, 5, 0, 0, 3, 1, 4], expected: 6 },
        { args: [1, 2, 3, 4, 5], expected: 4 },
        { args: [7, 6, 4, 3, 1], expected: 0 },
        { args: [1], expected: 0 },
    ]

    tests.forEach((test) => {
        it(`maxProfit(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(maxProfit(test.args), test.expected)
        })
    })
})
