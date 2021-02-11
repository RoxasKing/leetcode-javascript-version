/*
  Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

  Example 1:
    Input: s1 = "ab" s2 = "eidbaooo"
    Output: True
    Explanation: s2 contains one permutation of s1 ("ba").

  Example 2:
    Input:s1= "ab" s2 = "eidboaoo"
    Output: False

  Constraints:
    The input strings only contain lower case letters.
    The length of both given strings is in range [1, 10,000].

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/permutation-in-string
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Sliding Window

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let n1 = s1.length, n2 = s2.length
  let cnt = new Map()
  for (let i = 0; i < n1; i++) {
    let c = s1.charAt(i)
    if (!cnt.has(c)) { cnt.set(c, 0) }
    cnt.set(c, cnt.get(c) + 1)
  }
  for (let l = 0, r = 0; r < n2; r++) {
    let cr = s2.charAt(r)
    if (!cnt.has(cr)) { cnt.set(cr, 0) }
    cnt.set(cr, cnt.get(cr) - 1)
    while (l <= r && cnt.get(cr) < 0) {
      let cl = s2.charAt(l)
      cnt.set(cl, cnt.get(cl) + 1)
      l++
    }
    if (r + 1 - l === n1) { return true }
  }
  return false
}

export { checkInclusion }
