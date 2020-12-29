import { minPatches } from './patching-array.js'
import assert from 'assert'

describe('minPatches()', () => {
  let tests = [
    { args: [[1, 3], 6], expected: 1 },
    { args: [[1, 5, 10], 20], expected: 2 },
    { args: [[1, 2, 2], 5], expected: 0 },
    { args: [[1, 2, 31, 33], 2147483647], expected: 28 },
  ]

  tests.forEach((test) => {
    it(`minPatches(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(minPatches(...test.args), test.expected)
    })
  })
})
