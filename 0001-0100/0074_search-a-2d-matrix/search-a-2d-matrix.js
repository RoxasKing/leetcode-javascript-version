/*
  Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

  Integers in each row are sorted from left to right.
  The first integer of each row is greater than the last integer of the previous row.

  Example 1:
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    Output: true

  Example 2:
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
    Output: false

  Constraints:
    1. m == matrix.length
    2. n == matrix[i].length
    3. 1 <= m, n <= 100
    4. -10^4 <= matrix[i][j], target <= 10^4

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/search-a-2d-matrix
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Binary Search

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length, n = matrix[0].length
    let l = 0, r = m * n - 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        let i = Math.floor(mid / n), j = mid % n
        if (matrix[i][j] < target) {
            l++
        } else if (matrix[i][j] > target) {
            r--
        } else {
            return true
        }
    }
    return false
}

export { searchMatrix }
