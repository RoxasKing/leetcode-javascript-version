import { longestOnes } from './max-consecutive-ones-iii.js'
import assert from 'assert'

describe('longestOnes()', () => {
  let tests = [
    { args: { A: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], K: 2 }, expected: 6 },
    { args: { A: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], K: 3 }, expected: 10 },
  ]

  tests.forEach((test) => {
    let A = test.args.A, K = test.args.K
    it(`longestOnes([${A}], ${K}) === ${test.expected}`, () => {
      assert.deepStrictEqual(longestOnes(A, K), test.expected)
    })
  })
})
