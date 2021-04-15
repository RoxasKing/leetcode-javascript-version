/*
  You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

  Return the minimum number of operations to reduce x to exactly 0 if it's possible, otherwise, return -1.

  Example 1:
    Input: nums = [1,1,4,2,3], x = 5
    Output: 2
    Explanation: The optimal solution is to remove the last two elements to reduce x to zero.

  Example 2:
    Input: nums = [5,6,7,8,9], x = 4
    Output: -1

  Example 3:
    Input: nums = [3,2,20,1,1,3], x = 10
    Output: 5
    Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.

  Constraints:
    1. 1 <= nums.length <= 105
    2. 1 <= nums[i] <= 104
    3. 1 <= x <= 109

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/minimum-operations-to-reduce-x-to-zero
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Sliding Window + Greedy Algorithm + Double Pointer

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    let n = nums.length
    let l = 0, r = n - 1
    let sum = 0, out = 1 << 31 - 1
    for (; l < n; l++) {
        sum += nums[l]
        if (sum === x) {
            out = Math.min(out, l + 1)
            break
        }

        if (sum > x) {
            sum -= nums[l]
            l--
            break
        }
    }

    if (l === n && sum < x) { return -1 }

    while (true) {
        while (l < r && sum < x) {
            sum += nums[r]
            r--
        }

        if (sum === x) {
            out = Math.min(out, l + 1 + n - r - 1)
        }

        if (l < 0) {
            break
        }

        sum -= nums[l]
        l--
    }

    return (out === 1 << 31 - 1) ? -1 : out
}

export { minOperations }
