/*
  Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

  The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

  Example:
    Given matrix = [
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5]
    ]
    sumRegion(2, 1, 4, 3) -> 8
    sumRegion(1, 1, 2, 2) -> 11
    sumRegion(1, 2, 2, 4) -> 12

  Note:
    1. You may assume that the matrix does not change.
    2. There are many calls to sumRegion function.
    3. You may assume that row1 ≤ row2 and col1 ≤ col2.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/range-sum-query-2d-immutable
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Dynamic Programming

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.dp = []
    if (matrix.length == 0 || matrix[0].length == 0) { return }
    let m = matrix.length, n = matrix[0].length
    for (let i = 0; i < m; i++) {
        let sum = []
        for (let j = 0; j < n; j++) {
            sum.push(matrix[i][j])
            if (i > 0) {
                sum[j] += this.dp[i - 1][j]
            }
            if (j > 0) {
                sum[j] += sum[j - 1]
            }
            if (i > 0 && j > 0) {
                sum[j] -= this.dp[i - 1][j - 1]
            }
        }
        this.dp.push(sum)
    }
}

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let out = this.dp[row2][col2]
    if (row1 > 0) {
        out -= this.dp[row1 - 1][col2]
    }
    if (col1 > 0) {
        out -= this.dp[row2][col1 - 1]
    }
    if (row1 > 0 && col1 > 0) {
        out += this.dp[row1 - 1][col1 - 1]
    }
    return out
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

export { NumMatrix }
