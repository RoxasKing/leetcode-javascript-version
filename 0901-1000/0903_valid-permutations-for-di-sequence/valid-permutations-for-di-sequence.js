/*
  We are given S, a length n string of characters from the set {'D', 'I'}. (These letters stand for "decreasing" and "increasing".)

  A valid permutation is a permutation P[0], P[1], ..., P[n] of integers {0, 1, ..., n}, such that for all i:
    1. If S[i] == 'D', then P[i] > P[i+1], and;
    2. If S[i] == 'I', then P[i] < P[i+1].
  How many valid permutations are there?  Since the answer may be large, return your answer modulo 10^9 + 7.

  Example 1:
    Input: "DID"
    Output: 5
    Explanation:
      The 5 valid permutations of (0, 1, 2, 3) are:
      (1, 0, 3, 2)
      (2, 0, 3, 1)
      (2, 1, 3, 0)
      (3, 0, 2, 1)
      (3, 1, 2, 0)

  Note:
    1. 1 <= S.length <= 200
    2. S consists only of characters from the set {'D', 'I'}.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/valid-permutations-for-di-sequence
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Dynamic Programming

/**
 * @param {string} S
 * @return {number}
 */
var numPermsDISequence = function (S) {
    let n = S.length
    let mod = 1e9 + 7
    let dp = [[1], []]
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            let l = 0, r = j
            if (S.charAt(i - 1) === 'D') {
                l = j, r = i
            }
            dp[1][j] = 0
            for (let k = l; k < r; k++) {
                dp[1][j] += dp[0][k]
                dp[1][j] %= mod
            }
        }
        [dp[0], dp[1]] = [dp[1], dp[0]]
    }

    let out = 0
    for (let cnt of dp[0]) {
        out += cnt
        out %= mod
    }
    return out
}

export { numPermsDISequence }
