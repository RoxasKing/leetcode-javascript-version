/*
  Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

  Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

  Example 1:
    Input: nums = [1,2,2,3,1]
    Output: 2
    Explanation:
    The input array has a degree of 2 because both elements 1 and 2 appear twice.
    Of the subarrays that have the same degree:
    [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
    The shortest length is 2. So return 2.

  Example 2:
    Input: nums = [1,2,2,3,1,4,2]
    Output: 6
    Explanation:
    The degree is 3 because the element 2 is repeated 3 times.
    So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.

  Constraints:
    1. nums.length will be between 1 and 50,000.
    2. nums[i] will be an integer between 0 and 49,999.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/degree-of-an-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Sliding Window

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let n = nums.length

    let max = 0
    let cnt = new Map()
    for (let num of nums) {
        if (!cnt.has(num)) { cnt.set(num, 0) }
        cnt.set(num, cnt.get(num) + 1)
        max = Math.max(max, cnt.get(num))
    }

    let out = n
    cnt = new Map()
    for (let l = 0, r = 0; r < n; r++) {
        if (!cnt.has(nums[r])) { cnt.set(nums[r], 0) }
        cnt.set(nums[r], cnt.get(nums[r]) + 1)
        if (cnt.get(nums[r]) < max) { continue }
        while (l <= r && nums[l] !== nums[r]) {
            cnt.set(nums[l], cnt.get(nums[l]) - 1)
            l++
        }
        out = Math.min(out, r + 1 - l)
    }

    return out
}

export { findShortestSubArray }
