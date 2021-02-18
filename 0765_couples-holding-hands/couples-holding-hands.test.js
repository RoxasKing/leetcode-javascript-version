import { minSwapsCouples } from './couples-holding-hands.js'
import assert from 'assert'

describe('minSwapsCouples()', () => {
  let tests = [
    { args: [0, 2, 1, 3], expected: 1 },
    { args: [3, 2, 0, 1], expected: 0 },
    { args: [0, 2, 4, 3, 1, 5], expected: 2 },
    { args: [5, 4, 2, 6, 3, 1, 0, 7], expected: 2 },
  ]

  tests.forEach((test) => {
    it(`minSwapsCouples(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(minSwapsCouples(test.args), test.expected)
    })
  })
})
