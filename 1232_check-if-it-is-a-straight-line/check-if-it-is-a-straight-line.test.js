import { checkStraightLine } from './check-if-it-is-a-straight-line.js'
import assert from 'assert'

describe('checkStraightLine()', () => {
  let tests = [
    { args: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]], expected: true },
    { args: [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]], expected: false },
  ]

  tests.forEach((test) => {
    it(`checkStraightLine(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(checkStraightLine(test.args), test.expected)
    })
  })
})
