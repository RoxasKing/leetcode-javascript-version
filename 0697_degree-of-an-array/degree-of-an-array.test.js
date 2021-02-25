import { findShortestSubArray } from './degree-of-an-array.js'
import assert from 'assert'

describe('findShortestSubArray()', () => {
  let tests = [
    { args: [1, 2, 2, 3, 1], expected: 2 },
    { args: [1, 2, 2, 3, 1, 4, 2], expected: 6 },
  ]

  tests.forEach((test) => {
    it(`findShortestSubArray(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(findShortestSubArray(test.args), test.expected)
    })
  })
})
