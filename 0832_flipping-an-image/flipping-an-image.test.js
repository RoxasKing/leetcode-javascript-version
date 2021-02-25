import { flipAndInvertImage } from './flipping-an-image.js'
import assert from 'assert'

describe('flipAndInvertImage()', () => {
  let tests = [
    {
      args: [[1, 1, 0], [1, 0, 1], [0, 0, 0]],
      expected: [[1, 0, 0], [0, 1, 0], [1, 1, 1]]
    },
    {
      args: [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]],
      expected: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]
    },
  ]

  tests.forEach((test) => {
    it(`flipAndInvertImage(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(flipAndInvertImage(test.args), test.expected)
    })
  })
})
