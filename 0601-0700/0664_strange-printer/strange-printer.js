/*
  There is a strange printer with the following two special properties:

    1. The printer can only print a sequence of the same character each time.
    2. At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.

  Given a string s, return the minimum number of turns the printer needed to print it.

  Example 1:
    Input: s = "aaabbb"
    Output: 2
    Explanation: Print "aaa" first and then print "bbb".

  Example 2:
    Input: s = "aba"
    Output: 2
    Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.

  Constraints:
    1. 1 <= s.length <= 100
    2. s consists of lowercase English letters.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/strange-printer
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Important!

// Dynamic Programming

/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
    let n = s.length
    let f = []
    for (let i = 0; i < n; i++) {
        f.push(new Array(n).fill(1))
    }
    for (let k = 2; k <= n; k++) {
        for (let i = 0; i + (k - 1) < n; i++) {
            f[i][i + k - 1] = k
            for (let j = i + 1; j < i + k; j++) {
                let tmp = f[i][j - 1] + f[j][i + k - 1]
                if (s.charAt(i) === s.charAt(i + k - 1)) { tmp-- }
                f[i][i + k - 1] = Math.min(f[i][i + k - 1], tmp)
            }
        }
    }
    return f[0][n - 1]
}

export { strangePrinter }
