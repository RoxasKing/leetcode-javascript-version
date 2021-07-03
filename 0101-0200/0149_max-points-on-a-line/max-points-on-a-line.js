/*
  Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

  Example 1:
	Input: points = [[1,1],[2,2],[3,3]]
	Output: 3

  Example 2:
	Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
	Output: 4

  Constraints:
	1. 1 <= points.length <= 300
	2. points[i].length == 2
	3. -10^4 <= xi, yi <= 10^4
	4. All the points are unique.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/max-points-on-a-line
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Hash

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
	let out = 1, n = points.length
	let cntx = new Map(), cnty = new Map()
	for (let i = 0; i < n; i++) {
		let x1 = points[i][0], y1 = points[i][1]
		if (!cntx.has(x1)) { cntx.set(x1, 0) }
		if (!cnty.has(y1)) { cnty.set(y1, 0) }
		cntx.set(x1, cntx.get(x1) + 1)
		cnty.set(y1, cnty.get(y1) + 1)
		for (let j = i + 1; j < n; j++) {
			let x2 = points[j][0], y2 = points[j][1]
			if (x2 === x1 || y2 === y1) { continue }
			let cnt = 2
			for (let k = j + 1; k < n; k++) {
				let x3 = points[k][0], y3 = points[k][1]
				if (x3 === x2 || x3 == x1 || y3 == y2 || y3 == y1) { continue }
				if ((x2 - x1) * (y3 - y1) === (x3 - x1) * (y2 - y1)) { cnt++ }
			}
			out = Math.max(out, cnt)
		}
	}
	cntx.forEach(cnt => out = Math.max(out, cnt))
	cnty.forEach(cnt => out = Math.max(out, cnt))
	return out
}

export { maxPoints }
