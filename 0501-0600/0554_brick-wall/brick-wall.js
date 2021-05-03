/*
  There is a rectangular brick wall in front of you with n rows of bricks. The ith row has some number of bricks each of the same height (i.e., one unit) but they can be of different widths. The total width of each row is the same.

  Draw a vertical line from the top to the bottom and cross the least bricks. If your line goes through the edge of a brick, then the brick is not considered as crossed. You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.

  Given the 2D array wall that contains the information about the wall, return the minimum number of crossed bricks after drawing such a vertical line.

  Example 1:
    Input: wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
    Output: 2

  Example 2:
    Input: wall = [[1],[1],[1]]
    Output: 3

  Constraints:
    1. n == wall.length
    2. 1 <= n <= 10^4
    3. 1 <= wall[i].length <= 10^4
    4. 1 <= sum(wall[i].length) <= 2 * 10^4
    5. sum(wall[i]) is the same for each row i.
    6. 1 <= wall[i][j] <= 2^31 - 1

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/brick-wall
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Hash

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
    let cnt = new Map()
    for (let arr of wall) {
        let sum = 0
        for (let i = 0; i < arr.length - 1; i++) {
            sum += arr[i]
            if (!cnt.has(sum)) { cnt.set(sum, 0) }
            cnt.set(sum, cnt.get(sum) + 1)
        }
    }

    let n = wall.length
    let out = n
    cnt.forEach(c => {
        out = Math.min(out, n - c)
    })
    return out
}

export { leastBricks }
