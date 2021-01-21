/*
  You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].
  The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.
  Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

  Example 1:
    Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
    Output: 20
    Explanation:
      We can connect the points as shown above to get the minimum cost of 20.
      Notice that there is a unique path between every pair of points.

  Example 2:
    Input: points = [[3,12],[-2,5],[-4,1]]
    Output: 18

  Example 3:
    Input: points = [[0,0],[1,1],[1,0],[-1,1]]
    Output: 4

  Example 4:
    Input: points = [[-1000000,-1000000],[1000000,1000000]]
    Output: 4000000

  Example 5:
    Input: points = [[0,0]]
    Output: 0

  Constraints:
    1 <= points.length <= 1000
    -10^6 <= xi, yi <= 10^6
    All pairs (xi, yi) are distinct.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/min-cost-to-connect-all-points
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Prim's Algorithm + Greedy Algorithm

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  let n = points.length
  let visted = []
  let minDist = []
  for (let i = 0; i < n; i++) {
    visted.push(false)
    minDist.push(Infinity)
  }
  minDist[0] = 0

  let out = 0

  for (let i = 0; i < n; i++) {
    let next = 0
    let dist = Infinity
    for (let j = 0; j < n; j++) {
      if (!visted[j] && minDist[j] < dist) {
        next = j
        dist = minDist[j]
      }
    }

    out += dist
    visted[next] = true

    for (let j = 0; j < n; j++) {
      if (!visted[j]) {
        let dist = Math.abs(points[j][0] - points[next][0]) +
          Math.abs(points[j][1] - points[next][1])
        minDist[j] = Math.min(minDist[j], dist)
      }
    }
  }

  return out
}

export { minCostConnectPoints }
