/*
  On a 2D plane, we place n stones at some integer coordinate points. Each coordinate point may have at most one stone.

  A stone can be removed if it shares either the same row or the same column as another stone that has not been removed.

  Given an array stones of length n where stones[i] = [xi, yi] represents the location of the ith stone, return the largest possible number of stones that can be removed.

  Example 1:
    Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
    Output: 5
    Explanation: One way to remove 5 stones is as follows:
    1. Remove stone [2,2] because it shares the same row as [2,1].
    2. Remove stone [2,1] because it shares the same column as [0,1].
    3. Remove stone [1,2] because it shares the same row as [1,0].
    4. Remove stone [1,0] because it shares the same column as [0,0].
    5. Remove stone [0,1] because it shares the same row as [0,0].
    Stone [0,0] cannot be removed since it does not share a row/column with another stone still on the plane.

  Example 2:
    Input: stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
    Output: 3
    Explanation: One way to make 3 moves is as follows:
    1. Remove stone [2,2] because it shares the same row as [2,0].
    2. Remove stone [2,0] because it shares the same column as [0,0].
    3. Remove stone [0,2] because it shares the same row as [0,0].
    Stones [0,0] and [1,1] cannot be removed since they do not share a row/column with another stone still on the plane.

  Example 3:
    Input: stones = [[0,0]]
    Output: 0
    Explanation: [0,0] is the only stone on the plane, so you cannot remove it.

  Constraints:
    1 <= stones.length <= 1000
    0 <= xi, yi <= 104
    No two stones are at the same coordinate point.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/most-stones-removed-with-same-row-or-column
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Union-Find

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
    let n = stones.length
    let stonesInRow = new Map()
    let stonesInCol = new Map()
    for (let i = 0; i < n; i++) {
        let row = stones[i][0], col = stones[i][1]
        if (!stonesInRow.has(row)) { stonesInRow.set(row, []) }
        stonesInRow.get(row).push(i)
        if (!stonesInCol.has(col)) { stonesInCol.set(col, []) }
        stonesInCol.get(col).push(i)
    }

    let uf = new unionFind(n)
    for (let sts of stonesInRow.values()) {
        for (let i = 1; i < sts.length; i++) {
            uf.union(sts[i - 1], sts[i])
        }
    }
    for (let sts of stonesInCol.values()) {
        for (let i = 1; i < sts.length; i++) {
            uf.union(sts[i - 1], sts[i])
        }
    }

    let mark = new Map()
    let count = 0
    for (let i = 0; i < n; i++) {
        let ancestorI = uf.find(i)
        if (!mark.has(ancestorI)) {
            count++
            mark.set(ancestorI, true)
        }
    }
    return n - count
}

class unionFind {
    ancestor = []
    isEnd = []

    constructor(n) {
        for (let i = 0; i < n; i++) {
            this.ancestor.push(i)
            this.isEnd.push(false)
        }
    }

    find(x) {
        if (this.isEnd[this.ancestor[x]]) {
            return this.ancestor[x]
        }
        if (this.ancestor[x] !== x) {
            this.ancestor[x] = this.find(this.ancestor[x])
            this.isEnd[x] = false
            this.isEnd[this.ancestor[x]] = true
        }
        return this.ancestor[x]
    }

    union(x, y) {
        let ancestorX = this.find(x)
        let ancestorY = this.find(y)
        this.ancestor[ancestorX] = ancestorY
        this.isEnd[ancestorX] = false
        this.isEnd[ancestorY] = true
    }
}

export { removeStones }
