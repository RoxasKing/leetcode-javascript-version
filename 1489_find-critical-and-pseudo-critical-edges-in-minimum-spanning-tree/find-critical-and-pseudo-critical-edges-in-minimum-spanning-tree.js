/*
  Given a weighted undirected connected graph with n vertices numbered from 0 to n - 1, and an array edges where edges[i] = [ai, bi, weighti] represents a bidirectional and weighted edge between nodes ai and bi. A minimum spanning tree (MST) is a subset of the graph's edges that connects all vertices without cycles and with the minimum possible total edge weight.

  Find all the critical and pseudo-critical edges in the given graph's minimum spanning tree (MST). An MST edge whose deletion from the graph would cause the MST weight to increase is called a critical edge. On the other hand, a pseudo-critical edge is that which can appear in some MSTs but not all.

  Note that you can return the indices of the edges in any order.

  Example 1:
    Input: n = 5, edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
    Output: [[0,1],[2,3,4,5]]
    Explanation: The figure above describes the graph.
    The following figure shows all the possible MSTs:
    Notice that the two edges 0 and 1 appear in all MSTs, therefore they are critical edges, so we return them in the first list of the output.
    The edges 2, 3, 4, and 5 are only part of some MSTs, therefore they are considered pseudo-critical edges. We add them to the second list of the output.

  Example 2:
    Input: n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]
    Output: [[],[0,1,2,3]]
    Explanation: We can observe that since all 4 edges have equal weight, choosing any 3 edges from the given 4 will yield an MST. Therefore all 4 edges are pseudo-critical.


  Constraints:
    2 <= n <= 100
    1 <= edges.length <= min(200, n * (n - 1) / 2)
    edges[i].length == 3
    0 <= ai < bi < n
    1 <= weighti <= 1000
    All pairs (ai, bi) are distinct.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Union-Find

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function (n, edges) {
  let m = edges.length

  let idxes = []
  for (let i = 0; i < m; i++) { idxes.push(i) }
  idxes.sort((a, b) => (edges[a][2] < edges[b][2]) ? -1 : (edges[a][2] < edges[b][2]) ? -1 : 0)

  // first, find min weight MST
  let minWeight = 0, minSet = [], others = []
  let visited = new Map()
  let uf = new unionFind(n)
  for (let i of idxes) {
    let edge = edges[i]
    let x = edge[0], y = edge[1], weight = edge[2]
    if (uf.find(x) === uf.find(y)) {
      others.push(i)
      continue
    }
    minWeight += weight
    visited.set(i, true)
    minSet.push(i)
    uf.union(x, y)
  }

  // then, find critical edges
  let critical = new Map()
  for (let i of minSet) {
    let uf = new unionFind(n)
    let curWeight = 0
    for (let j of idxes) {
      if (j === i) { continue }
      let edge = edges[j]
      let x = edge[0], y = edge[1], weight = edge[2]
      if (uf.find(x) === uf.find(y)) { continue }
      uf.union(x, y)
      curWeight += weight
    }
    if (curWeight !== minWeight) { critical.set(i, true) }
  }

  // last, find pseudo-critical edges
  for (let i of others) {
    let edge = edges[i]
    let x = edge[0], y = edge[1], weight = edge[2]
    let uf = new unionFind(n)
    let curWeight = weight
    uf.union(x, y)
    for (let j of minSet) {
      let edge = edges[j]
      let x = edge[0], y = edge[1], weight = edge[2]
      if (uf.find(x) === uf.find(y)) { continue }
      uf.union(x, y)
      curWeight += weight
    }
    if (curWeight === minWeight) { visited.set(i, true) }
  }

  let out = [[], []]
  for (let i = 0; i < m; i++) {
    if (critical.get(i)) {
      out[0].push(i)
    } else if (visited.get(i)) {
      out[1].push(i)
    }
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

    if (this.size[x] < this.size[y]) { [x, y] = [y, x] }

    this.parent[y] = x
    this.size[x] += this.size[y]
  }
}

export { findCriticalAndPseudoCriticalEdges }
