import { transpose } from './transpose-matrix.js'
import assert from 'assert'

describe('transpose()', () => {
  let tests = [
    { args: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], expected: [[1, 4, 7], [2, 5, 8], [3, 6, 9]] },
    { args: [[1, 2, 3], [4, 5, 6]], expected: [[1, 4], [2, 5], [3, 6]] },
  ]

  tests.forEach((test) => {
    it(`transpose(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(transpose(test.args), test.expected)
    })
  })
})
