/*
  You are given an integer array nums and two integers limit and goal. The array nums has an interesting property that abs(nums[i]) <= limit.

  Return the minimum number of elements you need to add to make the sum of the array equal to goal. The array must maintain its property that abs(nums[i]) <= limit.

  Note that abs(x) equals x if x >= 0, and -x otherwise.

  Example 1:
    Input: nums = [1,-1,1], limit = 3, goal = -4
    Output: 2
    Explanation: You can add -2 and -3, then the sum of the array will be 1 - 1 + 1 - 2 - 3 = -4.

  Example 2:
    Input: nums = [1,-10,9,1], limit = 100, goal = 0
    Output: 1

  Constraints:
    1. 1 <= nums.length <= 10^5
    2. 1 <= limit <= 10^6
    3. -limit <= nums[i] <= limit
    4. -10^9 <= goal <= 10^9

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/minimum-elements-to-add-to-form-a-given-sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Math

/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
    let sum = 0
    for (let num of nums) { sum += num }
    let diff = Math.abs(goal - sum)
    limit = Math.abs(limit)
    return Math.floor(diff / limit) + (diff % limit > 0 ? 1 : 0)
}

export { minElements }
