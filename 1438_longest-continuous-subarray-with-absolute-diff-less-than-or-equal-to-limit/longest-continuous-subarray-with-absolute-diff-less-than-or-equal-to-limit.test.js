import { longestSubarray }
  from './longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit.js'
import assert from 'assert'

describe('longestSubarray()', () => {
  let tests = [
    { args: { nums: [8, 2, 4, 7], limit: 4 }, expected: 2 },
    { args: { nums: [10, 1, 2, 4, 7, 2], limit: 5 }, expected: 4 },
    { args: { nums: [4, 2, 2, 2, 4, 4, 2, 2], limit: 0 }, expected: 3 },
  ]

  tests.forEach((test) => {
    let nums = test.args.nums, limit = test.args.limit
    it(`longestSubarray([${nums}], ${limit}) === ${test.expected}`, () => {
      assert.deepStrictEqual(longestSubarray(nums, limit), test.expected)
    })
  })
})
