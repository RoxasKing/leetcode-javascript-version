/*
  Given an integer n, return the nth ugly number.

  Ugly number is a positive number whose prime factors only include 2, 3, and/or 5.

  Example 1:
    Input: n = 10
    Output: 12
    Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

  Example 2:
    Input: n = 1
    Output: 1
    Explanation: 1 is typically treated as an ugly number.

  Constraints:
    1 <= n <= 1690

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/ugly-number-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Dynamic Programming

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let dp = new Array(n).fill(0)
    dp[0] = 1
    let mul2 = 0, mul3 = 0, mul5 = 0
    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(dp[mul2] * 2, Math.min(dp[mul3] * 3, dp[mul5] * 5))
        if (dp[mul2] * 2 <= dp[i]) { mul2++ }
        if (dp[mul3] * 3 <= dp[i]) { mul3++ }
        if (dp[mul5] * 5 <= dp[i]) { mul5++ }
    }
    return dp[n - 1]
}

export { nthUglyNumber }
