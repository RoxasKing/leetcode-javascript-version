import { getRow } from './pascals-triangle-ii.js'
import assert from 'assert'

describe('getRow()', () => {
  let tests = [
    { args: 3, expected: [1, 3, 3, 1] },
    { args: 0, expected: [1] },
    { args: 1, expected: [1, 1] },
  ]

  tests.forEach((test) => {
    it(`getRow(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(getRow(test.args), test.expected)
    })
  })
})
