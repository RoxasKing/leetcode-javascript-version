/*
  You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

  Example 1:
    Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
    Output: true

  Example 2:
    Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
    Output: false

  Constraints:
    2 <= coordinates.length <= 1000
    coordinates[i].length == 2
    -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
    coordinates contains no duplicate point.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/check-if-it-is-a-straight-line
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let x0 = coordinates[0][0], y0 = coordinates[0][1]
  let x1 = coordinates[1][0], y1 = coordinates[1][1]
  for (let i = 2; i < coordinates.length; i++) {
    let xi = coordinates[i][0], yi = coordinates[i][1]
    if ((x1 - x0) * (yi - y0) !== (xi - x0) * (y1 - y0)) { return false }
  }
  return true
}

export { checkStraightLine }
