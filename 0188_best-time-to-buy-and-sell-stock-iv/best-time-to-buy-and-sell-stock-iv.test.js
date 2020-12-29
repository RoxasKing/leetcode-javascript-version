import { maxProfit } from './best-time-to-buy-and-sell-stock-iv.js'
import assert from 'assert'

describe('maxProfit()', () => {
  let tests = [
    { args: [2, [2, 4, 1]], expected: 2 },
    { args: [2, [3, 2, 6, 5, 0, 3]], expected: 7 },
    { args: [2, [3, 3, 5, 0, 0, 3, 1, 4]], expected: 6 },
  ]

  tests.forEach((test) => {
    it(`maxProfit(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(maxProfit(...test.args), test.expected)
    })
  })
})
