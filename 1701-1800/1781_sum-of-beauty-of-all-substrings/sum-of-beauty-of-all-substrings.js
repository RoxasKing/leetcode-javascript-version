/*
  The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.
    For example, the beauty of "abaacc" is 3 - 1 = 2.
  Given a string s, return the sum of beauty of all of its substrings.

  Example 1:
    Input: s = "aabcb"
    Output: 5
    Explanation: The substrings with non-zero beauty are ["aab","aabc","aabcb","abcb","bcb"], each with beauty equal to 1.

  Example 2:
    Input: s = "aabcbaa"
    Output: 17

  Constraints:
    1. 1 <= s.length <= 500
    2. s consists of only lowercase English letters.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/sum-of-beauty-of-all-substrings
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Sliding Window

/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
    let out = 0
    for (let k = 3; k <= s.length; k++) {
        let cnt = new Array(26).fill(0)
        for (let i = 0; i < s.length; i++) {
            cnt[s.charCodeAt(i) - 97]++
            if (i > k - 1) { cnt[s.charCodeAt(i - k) - 97]-- }
            if (i >= k - 1) {
                let max = -Infinity, min = Infinity
                for (let j = 0; j < 26; j++) {
                    if (cnt[j] > 0) {
                        max = Math.max(max, cnt[j])
                        min = Math.min(min, cnt[j])
                    }
                }
                out += max - min
            }
        }
    }
    return out
}

export { beautySum }
