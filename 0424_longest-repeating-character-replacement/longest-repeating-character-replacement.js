/*
  Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.
  In one operation, you can choose any character of the string and change it to any other uppercase English character.
  Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

  Note:
  Both the string's length and k will not exceed 10^4.

  Example 1:
    Input:
    s = "ABAB", k = 2
    Output:
    4
    Explanation:
    Replace the two 'A's with two 'B's or vice versa.

  Example 2:
    Input:
    s = "AABABBA", k = 1
    Output:
    4
    Explanation:
    Replace the one 'A' in the middle with 'B' and form "AABBBBA".
    The substring "BBBB" has the longest repeating letters, which is 4.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-repeating-character-replacement
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Sliding Window

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let out = 0
  let count = new Map()
  let l = 0
  for (let r = 0; r < s.length; r++) {
    let c = s.charAt(r)
    if (!count.has(c)) {
      count.set(c, 0)
    }
    count.set(c, count.get(c) + 1)
    let max = 0
    for (let cnt of count.values()) {
      max = Math.max(max, cnt)
    }
    if (max + k < r + 1 - l) {
      count.set(s.charAt(l), count.get(s.charAt(l)) - 1)
      l++
    } else {
      out = Math.max(out, r + 1 - l)
    }
  }
  return out
}

export { characterReplacement }
