/*
  Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

  Example 1:
    Input: n = 3
    Output: [[1,2,3],[8,9,4],[7,6,5]]

  Example 2:
    Input: n = 1
    Output: [[1]]

  Constraints:
    1 <= n <= 20

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/spiral-matrix-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let out = []
    for (let i = 0; i < n; i++) {
        out.push(new Array(n).fill(0))
    }
    let u = 0, d = n - 1, l = 0, r = n - 1
    let num = 1, move = 0
    while (u <= d && l <= r) {
        switch (move) {
            case 0:
                for (let i = l; i <= r; i++) {
                    out[u][i] = num++
                }
                u++
                break
            case 1:
                for (let i = u; i <= d; i++) {
                    out[i][r] = num++
                }
                r--
                break
            case 2:
                for (let i = r; i >= l; i--) {
                    out[d][i] = num++
                }
                d--
                break
            case 3:
                for (let i = d; i >= u; i--) {
                    out[i][l] = num++
                }
                l++
                break
        }
        move = (move + 1) % 4
    }
    return out
}

export { generateMatrix }
