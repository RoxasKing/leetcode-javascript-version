/*
  You are given a string text. You should split it to k substrings (subtext1, subtext2, ..., subtextk) such that:
    1. subtexti is a non-empty string.
    2. The concatenation of all the substrings is equal to text (i.e., subtext1 + subtext2 + ... + subtextk == text).
    3. subtexti == subtextk - i + 1 for all valid values of i (i.e., 1 <= i <= k).
  Return the largest possible value of k.

  Example 1:
    Input: text = "ghiabcdefhelloadamhelloabcdefghi"
    Output: 7
    Explanation: We can split the string on "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)".

  Example 2:
    Input: text = "merchant"
    Output: 1
    Explanation: We can split the string on "(merchant)".

  Example 3:
    Input: text = "antaprezatepzapreanta"
    Output: 11
    Explanation: We can split the string on "(a)(nt)(a)(pre)(za)(tpe)(za)(pre)(a)(nt)(a)".

  Example 4:
    Input: text = "aaa"
    Output: 3
    Explanation: We can split the string on "(a)(a)(a)".

  Constraints:
    1. 1 <= text.length <= 1000
    2. text consists only of lowercase English characters.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-chunked-palindrome-decomposition
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// DFS + Dynamic Programming

/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function (text) {
    if (text.length === 0) { return 0 }
    let n = text.length
    let out = 1
    for (let size = 1; size * 2 <= n; size++) {
        if (text.slice(0, size) !== text.slice(n - size)) {
            continue
        }
        let i = 0
        while ((i + 1) * size <= n - (i + 1) * size &&
            text.slice(i * size, (i + 1) * size) === text.slice(0, size) &&
            text.slice(i * size, (i + 1) * size) === text.slice(n - (i + 1) * size, n - i * size)) {
            i++
        }
        i--
        out = Math.max(out, 2 * (i + 1) + longestDecomposition(text.slice((i + 1) * size, n - (i + 1) * size)))
        break
    }
    return out
}

export { longestDecomposition }
