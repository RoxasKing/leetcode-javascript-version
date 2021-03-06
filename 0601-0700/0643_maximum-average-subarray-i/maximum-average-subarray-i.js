/*
  Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

  Example 1:
    Input: [1,12,-5,-6,50,3], k = 4
    Output: 12.75
    Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75

  Note:
    1. 1 <= k <= n <= 30,000.
    2. Elements of the given array will be in the range [-10,000, 10,000].

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/maximum-average-subarray-i
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let out = -10001
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (i > k - 1) { sum -= nums[i - k] }
        if (i >= k - 1) {
            out = Math.max(out, sum / k)
        }
    }
    return out
}

export { findMaxAverage }
