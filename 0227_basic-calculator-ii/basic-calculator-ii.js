/*
  Given a string s which represents an expression, evaluate this expression and return its value.

  The integer division should truncate toward zero.

  Example 1:
    Input: s = "3+2*2"
    Output: 7

  Example 2:
    Input: s = " 3/2 "
    Output: 1

  Example 3:
    Input: s = " 3+5 / 2 "
    Output: 5

  Constraints:
    1. 1 <= s.length <= 3 * 105
    2. s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
    3. s represents a valid expression.
    4. All the integers in the expression are non-negative integers in the range [0, 231 - 1].
    5. The answer is guaranteed to fit in a 32-bit integer.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/basic-calculator-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Stack

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let stk = [], num = 0, sig = '+'
    for (let i = 0; i <= s.length; i++) {
        const ch = s.charAt(i)
        if (ch === ' ') { continue }
        if ('0' <= ch && ch <= '9') {
            num = num * 10 + parseInt(ch)
            continue
        }
        switch (sig) {
            case '+':
                stk.push(num)
                break
            case '-':
                stk.push(-num)
                break
            case '*':
                stk.push(stk.pop() * num)
                break
            case '/':
                stk.push(~~(stk.pop() / num))
                break
        }
        num = 0
        sig = ch
    }
    return stk.reduce((pre, cur) => pre + cur, 0)
}

export { calculate }
