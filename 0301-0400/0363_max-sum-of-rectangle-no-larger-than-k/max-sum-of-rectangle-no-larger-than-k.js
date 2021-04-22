/*
  Given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k.

  It is guaranteed that there will be a rectangle with a sum no larger than k.

  Example 1:
    Input: matrix = [[1,0,1],[0,-2,3]], k = 2
    Output: 2
    Explanation: Because the sum of the blue rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).

  Example 2:
    Input: matrix = [[2,2,-1]], k = 3
    Output: 3

  Constraints:
    1. m == matrix.length
    2. n == matrix[i].length
    3. 1 <= m, n <= 100
    4. -100 <= matrix[i][j] <= 100
    5. -10^5 <= k <= 10^5

  Follow up: What if the number of rows is much larger than the number of columns?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
    let out = -Infinity
    let m = matrix.length, n = matrix[0].length
    for (let u = 0; u < m; u++) {
        let sumC = new Array(n).fill(0)
        for (let i = u; i < m; i++) {
            for (let j = 0; j < n; j++) {
                sumC[j] += matrix[i][j]
            }

            let sum = sumC[0], maxS = sumC[0]
            for (let j = 1; j < n; j++) {
                if (sum > 0) {
                    sum += sumC[j]
                } else {
                    sum = sumC[j]
                }
                maxS = Math.max(maxS, sum)
            }
            if (maxS < k) {
                out = Math.max(out, maxS)
                continue
            } else if (maxS === k) {
                return k
            }

            for (let l = 0; l < n; l++) {
                let sum = 0
                for (let j = l; j < n; j++) {
                    sum += sumC[j]
                    if (sum < k) {
                        out = Math.max(out, sum)
                    } else if (sum === k) {
                        return k
                    }
                }
            }
        }
    }
    return out
}

export { maxSumSubmatrix }
