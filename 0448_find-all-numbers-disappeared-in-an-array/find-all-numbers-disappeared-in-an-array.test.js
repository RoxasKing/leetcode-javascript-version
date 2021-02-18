import { findDisappearedNumbers } from './find-all-numbers-disappeared-in-an-array.js'
import assert from 'assert'

describe('findDisappearedNumbers()', () => {
  let tests = [
    { args: [4, 3, 2, 7, 8, 2, 3, 1], expected: [5, 6] },
    { args: [1], expected: [] },
    { args: [1, 1], expected: [2] },
    { args: [], expected: [] },
  ]

  tests.forEach((test) => {
    it(`findDisappearedNumbers(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(findDisappearedNumbers(test.args), test.expected)
    })
  })
})
