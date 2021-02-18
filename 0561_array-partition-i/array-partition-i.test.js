import { arrayPairSum } from './array-partition-i.js'
import assert from 'assert'

describe('arrayPairSum()', () => {
  let tests = [
    { args: [1, 4, 3, 2], expected: 4 },
    { args: [6, 2, 6, 5, 1, 2], expected: 9 },
  ]

  tests.forEach((test) => {
    it(`arrayPairSum(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(arrayPairSum(test.args), test.expected)
    })
  })
})
