/*
  Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.

  Example 1:
    Input: nums = [1,2,3,1], k = 3, t = 0
    Output: true

  Example 2:
    Input: nums = [1,0,1,1], k = 1, t = 2
    Output: true

  Example 3:
    Input: nums = [1,5,9,1,5,9], k = 2, t = 3
    Output: false

  Constraints:
    1. 0 <= nums.length <= 2 * 10^4
    2. -2^31 <= nums[i] <= 2^31 - 1
    3. 0 <= k <= 10^4
    4. 0 <= t <= 2^31 - 1

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/contains-duplicate-iii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Bucket Sort

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    let buckets = new Map()
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i]
        let b = getID(x, t + 1)
        if (buckets.has(b)) { return true }
        if (buckets.has(b - 1) && Math.abs(x - buckets.get(b - 1)) <= t) { return true }
        if (buckets.has(b + 1) && Math.abs(x - buckets.get(b + 1)) <= t) { return true }
        buckets.set(b, x)
        if (i >= k) { buckets.delete(getID(nums[i - k], t + 1)) }
    }
    return false
}

/**
 * @param {number} x
 * @param {number} w
 * @return {number}
 */
var getID = function (x, w) {
    if (x >= 0) { return Math.floor(x / w) }
    return Math.floor((x + 1) / w) - 1
}

export { containsNearbyAlmostDuplicate }
