import { longestSubstring } from './longest-substring-with-at-least-k-repeating-characters.js'
import assert from 'assert'

describe('longestSubstring()', () => {
  let tests = [
    { args: { s: 'aaabb', k: 3 }, expected: 3 },
    { args: { s: 'ababbc', k: 2 }, expected: 5 },
  ]

  tests.forEach((test) => {
    let s = test.args.s, k = test.args.k
    it(`longestSubstring(${s}, ${k}) === ${test.expected}`, () => {
      assert.deepStrictEqual(longestSubstring(s, k), test.expected)
    })
  })
})
