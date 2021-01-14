import { prefixesDivBy5 } from './binary-prefix-divisible-by-5.js'
import assert from 'assert'

describe('prefixesDivBy5()', () => {
  let tests = [
    { args: [0, 1, 1], expected: [true, false, false] },
    { args: [1, 1, 1], expected: [false, false, false] },
    { args: [0, 1, 1, 1, 1, 1], expected: [true, false, false, false, true, false] },
    { args: [1, 1, 1, 0, 1], expected: [false, false, false, false, false] },
  ]

  tests.forEach((test) => {
    it(`prefixesDivBy5(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(prefixesDivBy5(test.args), test.expected)
    })
  })
})
