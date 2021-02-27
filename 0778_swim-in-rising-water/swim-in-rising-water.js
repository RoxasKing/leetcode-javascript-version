/*
  On an N x N grid, each square grid[i][j] represents the elevation at that point (i,j).
  Now rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distance in zero time. Of course, you must stay within the boundaries of the grid during your swim.
  You start at the top left square (0, 0). What is the least time until you can reach the bottom right square (N-1, N-1)?

  Example 1:
    Input: [[0,2],[1,3]]
    Output: 3
    Explanation:
    At time 0, you are in grid location (0, 0).
    You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
    You cannot reach point (1, 1) until time 3.
    When the depth of water is 3, we can swim anywhere inside the grid.

  Example 2:
    Input: [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
    Output: 16
    Explanation:
     0  1  2  3  4
    24 23 22 21  5
    12 13 14 15 16
    11 17 18 19 20
    10  9  8  7  6
    The final route is marked in bold.
    We need to wait until time 16 so that (0, 0) and (4, 4) are connected.

  Note:
    2 <= N <= 50.
    grid[i][j] is a permutation of [0, ..., N*N - 1].

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/swim-in-rising-water
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Union-Find + Binary Search

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
    let n = grid.length
    let l = Math.max(grid[0][0], grid[n - 1][n - 1]), r = n * n - 1
    while (l < r) {
        let m = (l + r) >> 1
        if (!valid(grid, m)) {
            l = m + 1
        } else {
            r = m
        }
    }
    return l
}

/**
 * 
 * @param {number[][]} grid 
 * @param {number} limit 
 */
function valid(grid, limit) {
    let n = grid.length
    let uf = new unionFind(n * n)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > limit) { continue }
            for (let move of moves) {
                let x = i + move[0], y = j + move[1]
                if (x < 0 || n - 1 < x || y < 0 || n - 1 < y || grid[x][y] > limit) { continue }
                let a = i * n + j, b = x * n + y
                a = uf.find(a)
                b = uf.find(b)
                if (a === b) { continue }
                uf.union(a, b)
            }
        }
    }
    return uf.find(0) === uf.find(n * n - 1)
}

var moves = [[-1, 0], [1, 0], [0, -1], [0, 1]]

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

export { swimInWater }
