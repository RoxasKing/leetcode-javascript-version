import { maxSlidingWindow } from './sliding-window-maximum.js'
import assert from 'assert'

describe('maxSlidingWindow()', () => {
  let tests = [
    { args: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [3, 3, 5, 5, 6, 7] },
    { args: [[1], 1], expected: [1] },
    { args: [[1, -1], 1], expected: [1, -1] },
    { args: [[9, 11], 2], expected: [11] },
    { args: [[4, -2], 2], expected: [4] },
  ]

  tests.forEach((test) => {
    it(`maxSlidingWindow(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(maxSlidingWindow(...test.args), test.expected)
    })
  })
})
