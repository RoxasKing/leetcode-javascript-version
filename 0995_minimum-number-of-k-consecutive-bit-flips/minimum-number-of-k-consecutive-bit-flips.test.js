import { minKBitFlips } from './minimum-number-of-k-consecutive-bit-flips.js'
import assert from 'assert'

describe('minKBitFlips()', () => {
  let tests = [
    { args: { A: [0, 1, 0], K: 1 }, expected: 2 },
    { args: { A: [1, 1, 0], K: 2 }, expected: -1 },
    { args: { A: [0, 0, 0, 1, 0, 1, 1, 0], K: 3 }, expected: 3 },
    { args: { A: [0, 1, 0, 0, 1, 0], K: 4 }, expected: 3 },
  ]

  tests.forEach((test) => {
    let A = test.args.A, K = test.args.K
    it(`minKBitFlips([${A}], ${K}) === ${test.expected}`, () => {
      assert.deepStrictEqual(minKBitFlips(A, K), test.expected)
    })
  })
})
