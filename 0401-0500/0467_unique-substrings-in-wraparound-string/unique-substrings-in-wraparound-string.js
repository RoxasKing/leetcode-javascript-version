/*
  Consider the string s to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so s will look like this: "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".

  Now we have another string p. Your job is to find out how many unique non-empty substrings of p are present in s. In particular, your input is the string p and you need to output the number of different non-empty substrings of p in the string s.

  Note: p consists of only lowercase English letters and the size of p might be over 10000.

  Example 1:
    Input: "a"
    Output: 1
    Explanation: Only the substring "a" of string "a" is in the string s.

  Example 2:
    Input: "cac"
    Output: 2
    Explanation: There are two substrings "a", "c" of string "cac" in the string s.

  Example 3:
    Input: "zab"
    Output: 6
    Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of string "zab" in the string s.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/unique-substrings-in-wraparound-string
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Dynamic Programming

/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
    let dp = new Array(26).fill(0)
    let k = 0
    for (let i = 0; i < p.length; i++) {
        if (i > 0 && (p.charCodeAt(i - 1) - 97 + 1) % 26 === (p.charCodeAt(i) - 97)) {
            k++
        } else {
            k = 1
        }
        dp[p.charCodeAt(i) - 97] = Math.max(dp[p.charCodeAt(i) - 97], k)
    }
    return dp.reduce((pre, cur) => pre + cur, 0)
}

export { findSubstringInWraproundString }
