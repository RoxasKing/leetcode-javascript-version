/*
  Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

  A palindrome string is a string that reads the same backward as forward.

  Example 1:
    Input: s = "aab"
    Output: [["a","a","b"],["aa","b"]]

  Example 2:
    Input: s = "a"
    Output: [["a"]]

  Constraints:
    1. 1 <= s.length <= 16
    2. s contains only lowercase English letters.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/palindrome-partitioning
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// DFS + Backtracking

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let out = []
    dfs(s, 0, [], out)
    return out
}

/**
 * @param {string} s
 * @param {number} l
 * @param {string[]} cur
 * @param {string[][]} out
 */
function dfs(s, l, cur, out) {
    if (l === s.length) {
        out.push([...cur])
        return
    }

    for (let r = l; r < s.length; r++) {
        if (isPalindrome(s, l, r)) {
            cur.push(s.slice(l, r + 1))
            dfs(s, r + 1, cur, out)
            cur.pop()
        }
    }
}

/**
 * @param {string} s
 * @param {number} l
 * @param {number} r
 * @return {boolean}
 */
function isPalindrome(s, l, r) {
    while (l < r) {
        if (s.charAt(l) !== s.charAt(r)) { return false }
        l++
        r--
    }
    return true
}

export { partition }
