import { subarraysWithKDistinct } from './subarrays-with-k-different-integers.js'
import assert from 'assert'

describe('subarraysWithKDistinct()', () => {
  let tests = [
    { args: { A: [1, 2, 1, 2, 3], K: 2 }, expected: 7 },
    { args: { A: [1, 2, 1, 3, 4], K: 3 }, expected: 3 },
  ]

  tests.forEach((test) => {
    let A = test.args.A, K = test.args.K
    it(`subarraysWithKDistinct([${A}], ${K}) === ${test.expected}`, () => {
      assert.deepStrictEqual(subarraysWithKDistinct(A, K), test.expected)
    })
  })
})
