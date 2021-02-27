/*
  You are given two strings s and t of the same length. You want to change s to t. Changing the i-th character of s to i-th character of t costs |s[i] - t[i]| that is, the absolute difference between the ASCII values of the characters.
  You are also given an integer maxCost.
  Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of twith a cost less than or equal to maxCost.
  If there is no substring from s that can be changed to its corresponding substring from t, return 0.

  Example 1:
    Input: s = "abcd", t = "bcdf", maxCost = 3
    Output: 3
    Explanation: "abc" of s can change to "bcd". That costs 3, so the maximum length is 3.

  Example 2:
    Input: s = "abcd", t = "cdef", maxCost = 3
    Output: 1
    Explanation: Each character in s costs 2 to change to charactor in t, so the maximum length is 1.

  Example 3:
    Input: s = "abcd", t = "acde", maxCost = 0
    Output: 1
    Explanation: You can't make any change, so the maximum length is 1.

  Constraints:
    1 <= s.length, t.length <= 10^5
    0 <= maxCost <= 10^6
    s and t only contain lower case English letters.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/get-equal-substrings-within-budget
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Sliding Window

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
    let n = s.length
    let cost = []
    for (let i = 0; i < n; i++) { cost.push(Math.abs(s.charCodeAt(i) - t.charCodeAt(i))) }
    let out = 0
    let sum = 0
    let l = 0, r = 0
    for (; r < n; r++) {
        sum += cost[r]
        while (sum > maxCost) {
            sum -= cost[l]
            l++
        }
        out = Math.max(out, r + 1 - l)
    }
    return out
}

export { equalSubstring }
