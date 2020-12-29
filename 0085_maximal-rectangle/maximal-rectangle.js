/*
  给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

  示例 1：
    输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
    输出：6
    解释：最大矩形如上图所示。

  示例 2：
    输入：matrix = []
    输出：0

  示例 3：
    输入：matrix = [["0"]]
    输出：0

  示例 4：
    输入：matrix = [["1"]]
    输出：1

  示例 5：
    输入：matrix = [["0","0"]]
    输出：0

  提示：
    rows == matrix.length
    cols == matrix.length
    0 <= row, cols <= 200
    matrix[i][j] 为 '0' 或 '1'

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/maximal-rectangle
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0
  }
  let out = 0
  let m = matrix.length, n = matrix[0].length
  let heights = new Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        heights[j]++
      } else {
        heights[j] = 0
      }
    }
    out = Math.max(out, largestRectangleArea(heights))
  }
  return out
}

let largestRectangleArea = (heights) => {
  let out = 0
  let stack = [-1]
  let n = heights.length
  for (let i = 0; i < n; i++) {
    while (stack[stack.length - 1] != -1 && heights[stack[stack.length - 1]] >= heights[i]) {
      out = Math.max(out, heights[stack.pop()] * (i - 1 - stack[stack.length - 1]))
    }
    stack.push(i)
  }
  while (stack[stack.length - 1] != -1) {
    out = Math.max(out, heights[stack.pop()] * (n - 1 - stack[stack.length - 1]))
  }
  return out
}

export { maximalRectangle }
