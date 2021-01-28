/*
  There are n computers numbered from 0 to n-1 connected by ethernet cables connections forming a network where connections[i] = [a, b] represents a connection between computers a and b. Any computer can reach any other computer directly or indirectly through the network.

  Given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected. Return the minimum number of times you need to do this in order to make all the computers connected. If it's not possible, return -1.

  Example 1:
    Input: n = 4, connections = [[0,1],[0,2],[1,2]]
    Output: 1
    Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.

  Example 2:
    Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
    Output: 2

  Example 3:
    Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
    Output: -1
    Explanation: There are not enough cables.

  Example 4:
    Input: n = 5, connections = [[0,1],[0,2],[3,4],[2,3]]
    Output: 0

  Constraints:
    1 <= n <= 10^5
    1 <= connections.length <= min(n*(n-1)/2, 10^5)
    connections[i].length == 2
    0 <= connections[i][0], connections[i][1] < n
    connections[i][0] != connections[i][1]
    There are no repeated connections.
    No two computers are connected by more than one cable.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Union-Find

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  let uf = new unionFind(n)
  let cables = 0
  for (let conn of connections) {
    let x = conn[0], y = conn[1]
    if (uf.find(x) === uf.find(y)) {
      cables++
      continue
    }
    uf.union(x, y)
  }

  let groups = -1
  let mark = new Array(n).fill(false)
  for (let i = 0; i < n; i++) {
    let x = uf.find(i)
    if (!mark[x]) {
      mark[x] = true
      groups++
    }
  }

  if (groups > cables) {
    return -1
  }
  return groups
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

    this.parent[y] = x
    this.size[x] += this.size[y]
  }
}

export { makeConnected }
