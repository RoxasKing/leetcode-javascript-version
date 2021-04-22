/*
  Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

  Clarification:

  What should we return when needle is an empty string? This is a great question to ask during an interview.

  For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

  Example 1:
    Input: haystack = "hello", needle = "ll"
    Output: 2

  Example 2:
    Input: haystack = "aaaaa", needle = "bba"
    Output: -1

  Example 3:
    Input: haystack = "", needle = ""
    Output: 0

  Constraints:
    1. 0 <= haystack.length, needle.length <= 5 * 10^4
    2. haystack and needle consist of only lower-case English characters.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/implement-strstr
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let m = haystack.length, n = needle.length
    for (let i = 0; i < m - n + 1; i++) {
        if (haystack.slice(i, i + n) === needle) { return i }
    }
    return -1
}

export { strStr }
