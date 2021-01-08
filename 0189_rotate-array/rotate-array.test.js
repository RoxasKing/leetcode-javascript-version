import { rotate } from './rotate-array.js'
import assert from 'assert'

describe('rotate()', () => {
  let tests = [
    { args: [[1, 2, 3, 4, 5, 6, 7], 3], expected: [5, 6, 7, 1, 2, 3, 4] },
    { args: [[-1, -100, 3, 99], 2], expected: [3, 99, -1, -100] },
    { args: [[-1], 2], expected: [-1] },
  ]

  tests.forEach((test) => {
    it(`rotate(${test.args}) === ${test.expected}`, () => {
      rotate(...test.args)
      assert.deepStrictEqual(test.args[0], test.expected)
    })
  })
})
