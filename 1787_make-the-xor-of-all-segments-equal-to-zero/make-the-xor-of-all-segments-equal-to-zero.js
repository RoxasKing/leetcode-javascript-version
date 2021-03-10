/*
  You are given an array nums​​​ and an integer k​​​​​. The XOR of a segment [left, right] where left <= right is the XOR of all the elements with indices between left and right, inclusive: nums[left] XOR nums[left+1] XOR ... XOR nums[right].

  Return the minimum number of elements to change in the array such that the XOR of all segments of size k​​​​​​ is equal to zero.

  Example 1:
    Input: nums = [1,2,0,3,0], k = 1
    Output: 3
    Explanation: Modify the array from [1,2,0,3,0] to from [0,0,0,0,0].

  Example 2:
    Input: nums = [3,4,5,2,1,7,3,4,7], k = 3
    Output: 3
    Explanation: Modify the array from [3,4,5,2,1,7,3,4,7] to [3,4,7,3,4,7,3,4,7].

  Example 3:
    Input: nums = [1,2,4,1,2,5,1,2,6], k = 3
    Output: 3
    Explanation: Modify the array from [1,2,4,1,2,5,1,2,6] to [1,2,3,1,2,3,1,2,3].

  Constraints:
    1. 1 <= k <= nums.length <= 2000
     2. ​​​​​0 <= nums[i] < 2^10

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/make-the-xor-of-all-segments-equal-to-zero
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Dynamic Programming + Greedy algorithm

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function (nums, k) {
    let cnt = []
    for (let i = 0; i < k; i++) { cnt.push(new Array(1 << 10).fill(0)) }
    nums.forEach((num, i) => { cnt[i % k][num]++ })

    let dp0 = []
    let minCnt = 0
    for (let j = 0; j < 1 << 10; j++) {
        dp0.push(cnt[0][j])
        minCnt = Math.max(minCnt, cnt[0][j])
    }
    let keep = minCnt

    for (let i = 1; i < k; i++) {
        let maxCnt = 0
        let dp = new Array(1 << 10).fill(0)
        for (let j = 0; j < 1 << 10; j++) {
            if (cnt[i][j] === 0) { continue }
            maxCnt = Math.max(maxCnt, cnt[i][j])
            for (let k = 0; k < 1 << 10; k++) {
                dp[j ^ k] = Math.max(dp[j ^ k], dp0[k] + cnt[i][j])
            }
        }
        keep += maxCnt
        minCnt = Math.min(minCnt, maxCnt)
        dp0 = dp
    }
    keep -= minCnt

    return nums.length - Math.max(keep, dp0[0])
}

export { minChanges }
