import { smallestStringWithSwaps } from './smallest-string-with-swaps.js'
import assert from 'assert'

describe('smallestStringWithSwaps()', () => {
  let tests = [
    { args: ['dcab', [[0, 3], [1, 2]]], expected: 'bacd' },
    { args: ['dcab', [[0, 3], [1, 2], [0, 2]]], expected: 'abcd' },
    { args: ['cba', [[0, 1], [1, 2]]], expected: 'abc' },
    { args: ['c', []], expected: 'c' },
    { args: ['cb', [[0, 1]]], expected: 'bc' },
  ]

  tests.forEach((test) => {
    it(`smallestStringWithSwaps(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(smallestStringWithSwaps(...test.args), test.expected)
    })
  })
})
