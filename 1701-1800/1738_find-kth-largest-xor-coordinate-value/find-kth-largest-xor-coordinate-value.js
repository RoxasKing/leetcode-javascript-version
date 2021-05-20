/*
  You are given a 2D matrix of size m x n, consisting of non-negative integers. You are also given an integer k.

  The value of coordinate (a, b) of the matrix is the XOR of all matrix[i][j] where 0 <= i <= a < m and 0 <= j <= b < n (0-indexed).

  Find the kth largest value (1-indexed) of all the coordinates of matrix.

  Example 1:
    Input: matrix = [[5,2],[1,6]], k = 1
    Output: 7
    Explanation: The value of coordinate (0,1) is 5 XOR 2 = 7, which is the largest value.

  Example 2:
    Input: matrix = [[5,2],[1,6]], k = 2
    Output: 5
    Explanation: The value of coordinate (0,0) is 5 = 5, which is the 2nd largest value.

  Example 3:
    Input: matrix = [[5,2],[1,6]], k = 3
    Output: 4
    Explanation: The value of coordinate (1,0) is 5 XOR 1 = 4, which is the 3rd largest value.

  Example 4:
    Input: matrix = [[5,2],[1,6]], k = 4
    Output: 0
    Explanation: The value of coordinate (1,1) is 5 XOR 2 XOR 1 XOR 6 = 0, which is the 4th largest value.

  Constraints:
    1. m == matrix.length
    2. n == matrix[i].length
    3. 1 <= m, n <= 1000
    4. 0 <= matrix[i][j] <= 10^6
    5. 1 <= k <= m * n

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/find-kth-largest-xor-coordinate-value
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Bit Manipulation
// Prefix Sum
// Sort

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function (matrix, k) {
    let f = []
    let cnt = new Map()
    for (let i = 0; i < matrix.length; i++) {
        f.push([])
        for (let j = 0; j < matrix[0].length; j++) {
            f[i].push(matrix[i][j])
            if (i > 0) { f[i][j] ^= f[i - 1][j] }
            if (j > 0) { f[i][j] ^= f[i][j - 1] }
            if (i > 0 && j > 0) { f[i][j] ^= f[i - 1][j - 1] }
            if (!cnt.has(f[i][j])) { cnt.set(f[i][j], 0) }
            cnt.set(f[i][j], cnt.get(f[i][j]) + 1)
        }
    }

    let arr = []
    cnt.forEach((_, num) => { arr.push(num) })
    arr.sort((a, b) => (a > b) ? -1 : (a < b) ? 1 : 0)

    for (let num of arr) {
        if (cnt.has(num)) { k -= cnt.get(num) }
        if (k <= 0) { return num }
    }
    return 0
}

export { kthLargestValue }
