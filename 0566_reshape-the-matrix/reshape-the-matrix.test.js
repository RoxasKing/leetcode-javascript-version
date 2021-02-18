import { matrixReshape } from './reshape-the-matrix.js'
import assert from 'assert'

describe('matrixReshape()', () => {
  let tests = [
    { args: { nums: [[1, 2], [3, 4]], r: 1, c: 4 }, expected: [[1, 2, 3, 4]] },
    { args: { nums: [[1, 2], [3, 4]], r: 2, c: 4 }, expected: [[1, 2], [3, 4]] },
    { args: { nums: [[1, 2], [3, 4]], r: 4, c: 1 }, expected: [[1], [2], [3], [4]] },
  ]

  tests.forEach((test) => {
    let nums = test.args.nums, r = test.args.r, c = test.args.c
    it(`matrixReshape([${nums}], ${r}, ${c}) === ${test.expected}`, () => {
      assert.deepStrictEqual(matrixReshape(nums, r, c), test.expected)
    })
  })
})
