/*
  There is an undirected weighted connected graph. You are given a positive integer n which denotes that the graph has n nodes labeled from 1 to n, and an array edges where each edges[i] = [ui, vi, weighti] denotes that there is an edge between nodes ui and vi with weight equal to weighti.

  A path from node start to node end is a sequence of nodes [z0, z1, z2, ..., zk] such that z0 = start and zk = end and there is an edge between zi and zi+1 where 0 <= i <= k-1.

  The distance of a path is the sum of the weights on the edges of the path. Let distanceToLastNode(x) denote the shortest distance of a path between node n and node x. A restricted path is a path that also satisfies that distanceToLastNode(zi) > distanceToLastNode(zi+1) where 0 <= i <= k-1.

  Return the number of restricted paths from node 1 to node n. Since that number may be too large, return it modulo 10^9 + 7.

  Example 1:
    Input: n = 5, edges = [[1,2,3],[1,3,3],[2,3,1],[1,4,2],[5,2,2],[3,5,1],[5,4,10]]
    Output: 3
    Explanation: Each circle contains the node number in black and its distanceToLastNode value in blue. The three restricted paths are:
    1) 1 --> 2 --> 5
    2) 1 --> 2 --> 3 --> 5
    3) 1 --> 3 --> 5

  Example 2:
    Input: n = 7, edges = [[1,3,1],[4,1,2],[7,3,4],[2,5,3],[5,6,1],[6,7,2],[7,5,3],[2,6,4]]
    Output: 1
    Explanation: Each circle contains the node number in black and its distanceToLastNode value in blue. The only restricted path is 1 --> 3 --> 7.

  Constraints:
    1. 1 <= n <= 2 * 10^4
    2. n - 1 <= edges.length <= 4 * 10^4
    3. edges[i].length == 3
    4. 1 <= ui, vi <= n
    5. ui != vi
    6. 1 <= weighti <= 10^5
    7. There is at most one edge between any two nodes.
    8. There is at least one path between any two nodes.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/number-of-restricted-paths-from-first-to-last-node
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Graph + Priority Queue + Dynamic Programming

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countRestrictedPaths = function (n, edges) {
    let dict = [], dist = []
    for (let i = 0; i <= n; i++) {
        dict.push([])
        dist.push(Infinity)
    }
    dist[n] = 0
    for (let e of edges) {
        let u = e[0], v = e[1], w = e[2]
        dict[u].push([v, w])
        dict[v].push([u, w])
    }

    let q = [] // [u, v, weight] list
    for (let e of dict[n]) { q.push([e[0], n, e[1]]) }
    while (q.length > 0) {
        let e = q.shift()
        let u = e[0], v = e[1], w = e[2]
        if (dist[u] <= dist[v] + w) { continue }
        dist[u] = dist[v] + w
        for (let e of dict[u]) {
            if (e[0] == v) { continue }
            q.push([e[0], u, e[1]])
        }
    }

    let dp = new Array(n + 1).fill(0)
    dp[1] = 1

    let walked = new Map()

    let pq = new PriorityQueue(dist)
    for (let e of dict[1]) {
        let v = e[0]
        if (dist[1] > dist[v]) { pq.push([1, v]) }
    }

    while (pq.size() > 0) {
        let e = pq.pop()
        let u = e[0], v = e[1]

        let key = u + v * (n + 1)
        if (walked.has(key)) { continue }
        walked.set(key, undefined)

        dp[v] = (dp[v] + dp[u]) % (1e9 + 7)

        for (let e of dict[v]) {
            if (dist[v] <= dist[e[0]] || walked.has(v + e[0] * (n + 1))) { continue }
            pq.push([v, e[0]])
        }
    }

    return dp[n]
}

class PriorityQueue {
    _edges = [] // [u, v] list
    _dists = []
    _compareFunc = (a, b) =>
        (this._dists[a[1]] > this._dists[b[1]]) ? true : false

    constructor(dists) {
        this._dists = dists
    }

    push(x) {
        this._edges.push(x)
        this._up()
    }

    pop() {
        let last = this.size() - 1;
        [this._edges[0], this._edges[last]] = [this._edges[last], this._edges[0]]
        let out = this._edges.pop()
        this._down()
        return out
    }

    top() {
        return this._edges[0]
    }

    size() {
        return this._edges.length
    }

    _up() {
        let son = this.size() - 1
        while (son > 0) {
            let parent = (son - 1) >> 1
            if (!this._compareFunc(this._edges[son], this._edges[parent])) { return }
            [this._edges[parent], this._edges[son]] = [this._edges[son], this._edges[parent]]
            son = parent
        }
    }

    _down() {
        let parent = 0
        while (parent < (this.size() >> 1)) {
            let son = (parent << 1) + 1
            if (son > this.size() - 1) {
                return
            }
            if (son + 1 < this.size() && this._compareFunc(this._edges[son + 1], this._edges[son])) {
                son++
            }
            if (!this._compareFunc(this._edges[son], this._edges[parent])) { return }
            [this._edges[parent], this._edges[son]] = [this._edges[son], this._edges[parent]]
            parent = son
        }
    }
}

export { countRestrictedPaths }
