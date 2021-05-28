/*
  You are given a string s that consists of lower case English letters and brackets.

  Reverse the strings in each pair of matching parentheses, starting from the innermost one.

  Your result should not contain any brackets.

  Example 1:
    Input: s = "(abcd)"
    Output: "dcba"

  Example 2:
    Input: s = "(u(love)i)"
    Output: "iloveu"
    Explanation: The substring "love" is reversed first, then the whole string is reversed.

  Example 3:
    Input: s = "(ed(et(oc))el)"
    Output: "leetcode"
    Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

  Example 4:
    Input: s = "a(bcdefghijkl(mno)p)q"
    Output: "apmnolkjihgfedcbq"

  Constraints:
    1. 0 <= s.length <= 2000
    2. s only contains lower case English characters and parentheses.
    3. It's guaranteed that all parentheses are balanced.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Stack

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let stk = []
    for (let c of s) {
        if (c === ')') {
            let tmp = []
            while (stk[stk.length - 1] !== '(') { tmp.push(stk.pop()) }
            stk.pop()
            stk.push(...tmp)
        } else {
            stk.push(c)
        }
    }
    return stk.join('')
}

export { reverseParentheses }
