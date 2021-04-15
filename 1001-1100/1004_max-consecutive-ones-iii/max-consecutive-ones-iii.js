/*
  Given an array A of 0s and 1s, we may change up to K values from 0 to 1.
  Return the length of the longest (contiguous) subarray that contains only 1s.

  Example 1:
    Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
    Output: 6
    Explanation:
    [1,1,1,0,0,1,1,1,1,1,1]
    Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.

  Example 2:
    Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
    Output: 10
    Explanation:
    [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
    Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.

  Note:
    1. 1 <= A.length <= 20000
    2. 0 <= K <= A.length
    3. A[i] is 0 or 1

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/max-consecutive-ones-iii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Sliding Window

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
    let out = 0
    for (let l = 0, r = 0; r < A.length; r++) {
        if (A[r] === 0) { K-- }
        while (l <= r && K < 0) {
            if (A[l] === 0) { K++ }
            l++
        }
        out = Math.max(out, r + 1 - l)
    }
    return out
}

export { longestOnes }
