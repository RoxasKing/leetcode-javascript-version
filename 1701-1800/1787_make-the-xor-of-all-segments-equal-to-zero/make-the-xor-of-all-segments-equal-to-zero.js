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

// Important!

// Dynamic Programming
// Greedy algorithm
// Bit Manipulation

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function (nums, k) {
    let limit = 1 << 10
    let freq = new Array(k)
    for (let i = 0; i < k; i++) { freq[i] = new Array(limit).fill(0) }
    nums.forEach((num, i) => { freq[i % k][num]++ })

    let maxFreq = 0, f0 = freq[0]
    for (let j = 0; j < limit; j++) { maxFreq = Math.max(maxFreq, freq[0][j]) }
    let keep = maxFreq, minFreq = maxFreq

    for (let i = 1; i < k; i++) {
        let maxFreq = 0, f1 = new Array(limit).fill(0)
        for (let j = 0; j < limit; j++) {
            if (freq[i][j] === 0) { continue }
            maxFreq = Math.max(maxFreq, freq[i][j])
            for (let x = 0; x < limit; x++) {
                f1[j ^ x] = Math.max(f1[j ^ x], f0[x] + freq[i][j])
            }
        }
        keep += maxFreq
        minFreq = Math.min(minFreq, maxFreq)
        f0 = f1
    }

    return nums.length - Math.max(keep - minFreq, f0[0])
}

export { minChanges }
