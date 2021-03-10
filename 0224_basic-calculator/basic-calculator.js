/*
  Given a string s representing an expression, implement a basic calculator to evaluate it.

  Example 1:
    Input: s = "1 + 1"
    Output: 2

  Example 2:
    Input: s = " 2-1 + 2 "
    Output: 3

  Example 3:
    Input: s = "(1+(4+5+2)-3)+(6+8)"
    Output: 23

  Constraints:
    1. 1 <= s.length <= 3 * 105
    2. s consists of digits, '+', '-', '(', ')', and ' '.
    3. s represents a valid expression.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/basic-calculator
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Stack

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let ops = []
    let nus = []
    for (let i = 0; i < s.length;) {
        while (i < s.length && s.charAt(i) === ' ') { i++ }
        if (s.charAt(i) === '+' || s.charAt(i) === '-' || s.charAt(i) === '(') {
            ops.push(s.charAt(i))
            i++
        } else if (s.charAt(i) === ')') {
            i++
            if (ops.length > 0 && ops[ops.length - 1] !== '(') {
                let op = ops.pop()
                let num = nus.pop()
                if (op === '-') { num = -num }
                nus.push(num)
            } else if (ops.length > 0) {
                ops.pop()
            }
            if (ops.length > 0 && ops[ops.length - 1] !== '(') {
                let op = ops.pop()
                let num2 = nus.pop()
                let num1 = 0
                if (nus.length > 0) {
                    num1 = nus.pop()
                }
                let res = 0
                if (op === '+') {
                    res = num1 + num2
                } else {
                    res = num1 - num2
                }
                nus.push(res)
            } else if (ops.length > 0) {
                ops.pop()
            }
        } else {
            let j = i
            while (j < s.length && '0' <= s.charAt(j) && s.charAt(j) <= '9') { j++ }
            let num2 = parseInt(s.slice(i, j))
            i = j
            if (ops.length > 0 && ops[ops.length - 1] !== '(') {
                let op = ops.pop()
                let num1 = 0
                if (nus.length > 0) {
                    num1 = nus.pop()
                }
                let res = 0
                if (op === '+') {
                    res = num1 + num2
                } else {
                    res = num1 - num2
                }
                nus.push(res)
            } else {
                nus.push(num2)
            }
        }
    }
    return nus[0]
}

export { calculate }
