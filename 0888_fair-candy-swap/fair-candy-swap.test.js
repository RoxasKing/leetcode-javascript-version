import { fairCandySwap } from './fair-candy-swap.js'
import assert from 'assert'

describe('fairCandySwap()', () => {
  let tests = [
    { args: { A: [1, 1], B: [2, 2] }, expected: [1, 2] },
    { args: { A: [1, 2], B: [2, 3] }, expected: [1, 2] },
    { args: { A: [2], B: [1, 3] }, expected: [2, 3] },
    { args: { A: [1, 2, 5], B: [2, 4] }, expected: [5, 4] },
  ]

  tests.forEach((test) => {
    let A = test.args.A, B = test.args.B
    it(`fairCandySwap([${A}], [${B}]) === ${test.expected}`, () => {
      assert.deepStrictEqual(fairCandySwap(A, B), test.expected)
    })
  })
})
