/*
  Given an array A of positive integers, call a (contiguous, not necessarily distinct) subarray of A good if the number of different integers in that subarray is exactly K.
  (For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.)
  Return the number of good subarrays of A.

  Example 1:
    Input: A = [1,2,1,2,3], K = 2
    Output: 7
    Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].

  Example 2:
    Input: A = [1,2,1,3,4], K = 3
    Output: 3
    Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].

  Note:
    1. 1 <= A.length <= 20000
    2. 1 <= A[i] <= A.length
    3. 1 <= K <= A.length

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/subarrays-with-k-different-integers
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Sliding Window + Hash

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function (A, K) {
    let out = 0
    let cnt = new Map()
    for (let l = 0, r = 0, k = 0; r < A.length; r++) {
        if (!cnt.has(A[r])) { cnt.set(A[r], 0) }
        if (cnt.get(A[r]) === 0) { k++ }
        cnt.set(A[r], cnt.get(A[r]) + 1)
        while (k > K) {
            cnt.set(A[l], cnt.get(A[l]) - 1)
            if (cnt.get(A[l]) === 0) { k-- }
            l++
        }
        if (k === K) {
            let i = l
            while (i <= r) {
                out++
                cnt.set(A[i], cnt.get(A[i]) - 1)
                if (cnt.get(A[i]) === 0) { break }
                i++
            }
            while (i >= l) {
                cnt.set(A[i], cnt.get(A[i]) + 1)
                i--
            }
        }
    }
    return out
}

export { subarraysWithKDistinct }
