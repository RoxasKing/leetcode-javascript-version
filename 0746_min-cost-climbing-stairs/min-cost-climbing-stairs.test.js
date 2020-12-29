import { minCostClimbingStairs } from './min-cost-climbing-stairs.js'
import assert from 'assert'

describe('minCostClimbingStairs()', () => {
  let tests = [
    { args: [10, 15, 20], expected: 15 },
    { args: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1], expected: 6 },
  ]

  tests.forEach((test) => {
    it(`minCostClimbingStairs([${test.args}]) === ${test.expected}`, () => {
      assert.deepStrictEqual(minCostClimbingStairs(test.args), test.expected)
    })
  })
})
