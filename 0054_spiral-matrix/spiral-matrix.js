/*
  Given an m x n matrix, return all elements of the matrix in spiral order.

  Example 1:
    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [1,2,3,6,9,8,7,4,5]

  Example 2:
    Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]

  Constraints:
    1. m == matrix.length
    2. n == matrix[i].length
    3. 1 <= m, n <= 10
    4. -100 <= matrix[i][j] <= 100

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/spiral-matrix
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let m = matrix.length, n = matrix[0].length
    let u = 0, d = m - 1, l = 0, r = n - 1
    let forward = 0
    let out = []
    while (u <= d && l <= r) {
        switch (forward) {
            case 0:
                for (let j = l; j <= r; j++) {
                    out.push(matrix[u][j])
                }
                u++
                break
            case 1:
                for (let i = u; i <= d; i++) {
                    out.push(matrix[i][r])
                }
                r--
                break
            case 2:
                for (let j = r; j >= l; j--) {
                    out.push(matrix[d][j])
                }
                d--
                break
            case 3:
                for (let i = d; i >= u; i--) {
                    out.push(matrix[i][l])
                }
                l++
                break
        }
        forward = (forward + 1) % 4
    }
    return out
}

export { spiralOrder }
