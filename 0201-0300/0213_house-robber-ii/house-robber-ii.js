/*
  You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

  Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

  Example 1:
    Input: nums = [2,3,2]
    Output: 3
    Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

  Example 2:
    Input: nums = [1,2,3,1]
    Output: 4
    Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
    Total amount you can rob = 1 + 3 = 4.

  Example 3:
    Input: nums = [0]
    Output: 0

  Constraints:
    1. 1 <= nums.length <= 100
    2. 0 <= nums[i] <= 1000

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/house-robber-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Dynamic Programming

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length
    if (n === 0) { return 0 }
    if (n === 1) { return nums[0] }
    return Math.max(dp(nums.slice(1)), dp(nums.slice(0, n - 1)))
}

/**
 * 
 * @param {number[]} nums 
 * @return {number}
 */
function dp(nums) {
    let n = nums.length
    let f = [0, nums[0]]
    for (let i = 2; i <= n; i++) {
        f.push(Math.max(f[i - 1], f[i - 2] + nums[i - 1]))
    }
    return f[n]
}

export { rob }
