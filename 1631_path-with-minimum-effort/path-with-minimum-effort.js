/*
  You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.
  A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.
  Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

  Example 1:
    Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
    Output: 2
    Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
    This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.

  Example 2:
    Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
    Output: 1
    Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].

  Example 3:
    Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
    Output: 0
    Explanation: This route does not require any effort.

  Constraints:
    rows == heights.length
    columns == heights[i].length
    1 <= rows, columns <= 100
    1 <= heights[i][j] <= 106

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/path-with-minimum-effort
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Union-Find

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  let m = heights.length, n = heights[0].length
  let links = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0) {
        let x = (i - 1) * n + j, y = i * n + j, diff = Math.abs(heights[i - 1][j] - heights[i][j])
        links.push([x, y, diff])
      }
      if (j > 0) {
        let x = i * n + j - 1, y = i * n + j, diff = Math.abs(heights[i][j - 1] - heights[i][j])
        links.push([x, y, diff])
      }
    }
  }
  links.sort((a, b) => (a[2] < b[2]) ? -1 : (a[2] > b[2]) ? 1 : 0)
  let uf = new unionFind(m * n)
  let out = 0
  for (let link of links) {
    let x = link[0], y = link[1], diff = link[2]
    if (uf.find(x) === uf.find(y)) { continue }
    uf.union(x, y)
    out = Math.max(out, diff)
    if (uf.find(0) === uf.find(m * n - 1)) { break }
  }
  return out
}

class unionFind {
  parent = []
  size = []

  constructor(n) {
    for (let i = 0; i < n; i++) {
      this.parent.push(i)
      this.size.push(1)
    }
  }

  find(x) {
    if (this.parent[x] !== x) { this.parent[x] = this.find(this.parent[x]) }
    return this.parent[x]
  }

  union(x, y) {
    x = this.find(x)
    y = this.find(y)
    if (x === y) { return }
    if (this.size[x] > this.size[y]) { [x, y] = [y, x] }
    this.parent[x] = y
    this.size[y] += this.size[x]
  }
}

export { minimumEffortPath }
