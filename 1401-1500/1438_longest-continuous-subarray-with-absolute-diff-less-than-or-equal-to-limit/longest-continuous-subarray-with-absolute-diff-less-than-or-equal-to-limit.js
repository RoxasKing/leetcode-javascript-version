/*
  Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.

  Example 1:
    Input: nums = [8,2,4,7], limit = 4
    Output: 2
    Explanation: All subarrays are:
    [8] with maximum absolute diff |8-8| = 0 <= 4.
    [8,2] with maximum absolute diff |8-2| = 6 > 4.
    [8,2,4] with maximum absolute diff |8-2| = 6 > 4.
    [8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
    [2] with maximum absolute diff |2-2| = 0 <= 4.
    [2,4] with maximum absolute diff |2-4| = 2 <= 4.
    [2,4,7] with maximum absolute diff |2-7| = 5 > 4.
    [4] with maximum absolute diff |4-4| = 0 <= 4.
    [4,7] with maximum absolute diff |4-7| = 3 <= 4.
    [7] with maximum absolute diff |7-7| = 0 <= 4.
    Therefore, the size of the longest subarray is 2.

  Example 2:
    Input: nums = [10,1,2,4,7,2], limit = 5
    Output: 4
    Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.

  Example 3:
    Input: nums = [4,2,2,2,4,4,2,2], limit = 0
    Output: 3

  Constraints:
    1 <= nums.length <= 10^5
    1 <= nums[i] <= 10^9
    0 <= limit <= 10^9

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Sliding Window + Monotone Stack

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
    let out = 0
    let n = nums.length
    let maxs = [], mins = []
    for (let l = 0, r = 0; r < n; r++) {
        while (mins.length > 0 && mins[mins.length - 1] > nums[r]) { mins.pop() }
        while (maxs.length > 0 && maxs[maxs.length - 1] < nums[r]) { maxs.pop() }
        mins.push(nums[r])
        maxs.push(nums[r])
        while (l < r && maxs[0] - mins[0] > limit) {
            if (maxs[0] === nums[l]) { maxs.shift() }
            if (mins[0] === nums[l]) { mins.shift() }
            l++
        }
        out = Math.max(out, r + 1 - l)
    }
    return out
}

export { longestSubarray }
