/*
  Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:
    answer[i] % answer[j] == 0, or
    answer[j] % answer[i] == 0
  If there are multiple solutions, return any of them.

  Example 1:
    Input: nums = [1,2,3]
    Output: [1,2]
    Explanation: [1,3] is also accepted.

  Example 2:
    Input: nums = [1,2,4,8]
    Output: [1,2,4,8]

  Constraints:
    1. 1 <= nums.length <= 1000
    2. 1 <= nums[i] <= 2 * 10^9
    3. All the integers in nums are unique.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/largest-divisible-subset
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Math + Dynamic Programming

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0)
    let n = nums.length
    let pre = [], cnt = [], idx = -1, max = 0
    for (let i = 0; i < n; i++) {
        pre.push(-1)
        cnt.push(1)
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] % nums[j] === 0 && cnt[j] + 1 > cnt[i]) {
                pre[i] = j
                cnt[i] = cnt[j] + 1
            }
        }
        if (cnt[i] > max) {
            idx = i
            max = cnt[i]
        }
    }

    let out = []
    for (let i = max - 1; i >= 0; i--) {
        out[i] = nums[idx]
        idx = pre[idx]
    }
    return out
}

export { largestDivisibleSubset }
