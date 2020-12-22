import { removeDuplicateLetters } from './remove-duplicate-letters.js'
import assert from 'assert'

describe('removeDuplicateLetters()', () => {
  let tests = [
    { args: 'bcabc', expected: 'abc' },
    { args: 'cbacdcbc', expected: 'acdb' },
    { args: 'abacb', expected: 'abc' },
    { args: 'bbcaac', expected: 'bac' },
  ]

  tests.forEach((test) => {
    it(`removeDuplicateLetters(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(removeDuplicateLetters(test.args), test.expected)
    })
  })
})
