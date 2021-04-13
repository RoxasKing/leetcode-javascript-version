/*
  Given a single positive integer x, we will write an expression of the form x (op1) x (op2) x (op3) x ... where each operator op1, op2, etc. is either addition, subtraction, multiplication, or division (+, -, *, or /). For example, with x = 3, we might write 3 * 3 / 3 + 3 - 3 which is a value of 3.

  When writing such an expression, we adhere to the following conventions:
    1. The division operator (/) returns rational numbers.
    2. There are no parentheses placed anywhere.
    3. We use the usual order of operations: multiplication and division happen before addition and subtraction.
    4. It is not allowed to use the unary negation operator (-). For example, "x - x" is a valid expression as it only uses subtraction, but "-x + x" is not because it uses negation.
  We would like to write an expression with the least number of operators such that the expression equals the given target. Return the least number of operators used.

  Example 1:
    Input: x = 3, target = 19
    Output: 5
    Explanation: 3 * 3 + 3 * 3 + 3 / 3.
    The expression contains 5 operations.

  Example 2:
    Input: x = 5, target = 501
    Output: 8
    Explanation: 5 * 5 * 5 * 5 - 5 * 5 * 5 + 5 / 5.
    The expression contains 8 operations.

  Example 3:
    Input: x = 100, target = 100000000
    Output: 3
    Explanation: 100 * 100 * 100 * 100.
    The expression contains 3 operations.

  Constraints:
    2 <= x <= 100
    1 <= target <= 2 * 108

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/least-operators-to-express-number
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// DFS + Dynamic Programming

/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */
var leastOpsExpressTarget = function (x, target) {
    let memo = new Map()
    dfs(x, target, memo)
    return memo.get(target)
}

/**
 * @param {number} x
 * @param {number} target
 * @param {Map} memo
 */
function dfs(x, target, memo) {
    if (memo.has(target)) { return }

    if (target < x) {
        memo.set(target, Math.min(target * 2 - 1, (x - target) * 2))
        return
    }

    let out = target * 2 - 1
    let i = 1, product = x
    while (product < target) {
        let tmp = Math.floor(target / product) * i - 1
        let remain = target % product
        if (remain > 0) {
            if (!memo.has(remain)) { dfs(x, remain, memo) }
            tmp += 1 + memo.get(remain)
        }
        out = Math.min(out, tmp)
        product *= x
        i++
    }

    if (product === target) {
        memo.set(target, i - 1)
        return
    }

    if (product - target > target) {
        memo.set(target, out)
        return
    }

    dfs(x, product - target, memo)
    out = Math.min(out, i + memo.get(product - target))
    memo.set(target, out)
}

export { leastOpsExpressTarget }
