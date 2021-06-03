/*
  Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

  Example 1:
    Input: nums = [0,1]
    Output: 2
    Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

  Example 2:
    Input: nums = [0,1,0]
    Output: 2
    Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

  Constraints:
    1. 1 <= nums.length <= 10^5
    2. nums[i] is either 0 or 1.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/contiguous-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Hash

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let out = 0
    let dict = new Map()
    dict.set(0, -1)
    let diff = 0
    nums.forEach((num, i) => {
        if (num === 0) {
            diff--
        } else {
            diff++
        }
        if (dict.has(diff)) {
            out = Math.max(out, i - dict.get(diff))
        } else {
            dict.set(diff, i)
        }
    })
    return out
}

export { findMaxLength }
