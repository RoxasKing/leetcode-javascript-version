/*
  Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

  Example 1:
    Input: s = "aaabb", k = 3
    Output: 3
    Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.

  Example 2:
    Input: s = "ababbc", k = 2
    Output: 5
    Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

  Constraints:
    1. 1 <= s.length <= 10^4
    2. s consists of only lowercase English letters.
    3. 1 <= k <= 10^5

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Sliding Window

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  let out = 0
  for (let t = 1; t <= 26; t++) {
    let cnt = new Map()
    let typ = 0
    let lss = 0
    for (let l = 0, r = 0; r < s.length; r++) {
      let c = s.charCodeAt(r) - 97
      if (!cnt.has(c)) { cnt.set(c, 0) }
      if (cnt.get(c) === 0) {
        typ++
        lss++
      }
      cnt.set(c, cnt.get(c) + 1)
      if (cnt.get(c) === k) { lss-- }
      while (typ > t) {
        c = s.charCodeAt(l) - 97
        if (cnt.get(c) === k) { lss++ }
        cnt.set(c, cnt.get(c) - 1)
        if (cnt.get(c) === 0) {
          typ--
          lss--
        }
        l++
      }
      if (lss === 0) {
        out = Math.max(out, r + 1 - l)
      }
    }
  }
  return out
}

export { longestSubstring }
