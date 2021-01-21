import { minCostConnectPoints } from './min-cost-to-connect-all-points.js'
import assert from 'assert'

describe('minCostConnectPoints()', () => {
  let tests = [
    { args: [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]], expected: 20 },
    { args: [[3, 12], [-2, 5], [-4, 1]], expected: 18 },
    { args: [[0, 0], [1, 1], [1, 0], [-1, 1]], expected: 4 },
    { args: [[-1000000, -1000000], [1000000, 1000000]], expected: 4000000 },
    { args: [[0, 0]], expected: 0 },
  ]

  tests.forEach((test) => {
    it(`minCostConnectPoints(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(minCostConnectPoints(test.args), test.expected)
    })
  })
})
