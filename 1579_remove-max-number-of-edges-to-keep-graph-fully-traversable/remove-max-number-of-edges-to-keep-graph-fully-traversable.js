/*
  Alice and Bob have an undirected graph of n nodes and 3 types of edges:
    Type 1: Can be traversed by Alice only.
    Type 2: Can be traversed by Bob only.
    Type 3: Can by traversed by both Alice and Bob.
  Given an array edges where edges[i] = [typei, ui, vi] represents a bidirectional edge of type typei between nodes ui and vi, find the maximum number of edges you can remove so that after removing the edges, the graph can still be fully traversed by both Alice and Bob. The graph is fully traversed by Alice and Bob if starting from any node, they can reach all other nodes.

  Return the maximum number of edges you can remove, or return -1 if it's impossible for the graph to be fully traversed by Alice and Bob.

  Example 1:
    Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]
    Output: 2
    Explanation: If we remove the 2 edges [1,1,2] and [1,1,3]. The graph will still be fully traversable by Alice and Bob. Removing any additional edge will not make it so. So the maximum number of edges we can remove is 2.

  Example 2:
    Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]]
    Output: 0
    Explanation: Notice that removing any edge will not make the graph fully traversable by Alice and Bob.

  Example 3:
    Input: n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]]
    Output: -1
    Explanation: In the current graph, Alice cannot reach node 4 from the other nodes. Likewise, Bob cannot reach 1. Therefore it's impossible to make the graph fully traversable.

  Constraints:
    1 <= n <= 10^5
    1 <= edges.length <= min(10^5, 3 * n * (n-1) / 2)
    edges[i].length == 3
    1 <= edges[i][0] <= 3
    1 <= edges[i][1] < edges[i][2] <= n
    All tuples (typei, ui, vi) are distinct.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Union-Find

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function (n, edges) {
  let uf1 = new unionFind(n)
  let uf2 = new unionFind(n)
  let count1 = 0, count2 = 0, remain1 = 0, remain2 = 0, remain3 = 0

  for (let e of edges) {
    let typ = e[0], x = e[1] - 1, y = e[2] - 1
    if (typ != 3) { continue }
    if (uf1.find(x) === uf1.find(y) && uf2.find(x) === uf2.find(y)) {
      remain3++
      continue
    }
    if (uf1.find(x) !== uf1.find(y)) {
      uf1.union(x, y)
      count1++
    }
    if (uf2.find(x) !== uf2.find(y)) {
      uf2.union(x, y)
      count2++
    }
  }

  for (let e of edges) {
    let typ = e[0], x = e[1] - 1, y = e[2] - 1
    if (typ != 1) { continue }
    if (uf1.find(x) === uf1.find(y)) {
      remain1++
      continue
    }
    uf1.union(x, y)
    count1++
  }

  for (let e of edges) {
    let typ = e[0], x = e[1] - 1, y = e[2] - 1
    if (typ != 2) { continue }
    if (uf2.find(x) === uf2.find(y)) {
      remain2++
      continue
    }
    uf2.union(x, y)
    count2++
  }

  if (count1 < n - 1 || count2 < n - 1) { return -1 }
  return remain1 + remain2 + remain3
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

export { maxNumEdgesToRemove }
