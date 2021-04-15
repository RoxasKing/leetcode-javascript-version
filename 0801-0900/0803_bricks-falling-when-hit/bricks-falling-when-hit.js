/*
  You are given an m x n binary grid, where each 1 represents a brick and 0 represents an empty space. A brick is stable if:
    It is directly connected to the top of the grid, or
    At least one other brick in its four adjacent cells is stable.
  You are also given an array hits, which is a sequence of erasures we want to apply. Each time we want to erase the brick at the location hits[i] = (rowi, coli). The brick on that location (if it exists) will disappear. Some other bricks may no longer be stable because of that erasure and will fall. Once a brick falls, it is immediately erased from the grid (i.e., it does not land on other stable bricks).
  Return an array result, where each result[i] is the number of bricks that will fall after the ith erasure is applied.

  Note that an erasure may refer to a location with no brick, and if it does, no bricks drop.

  Example 1:
    Input: grid = [[1,0,0,0],[1,1,1,0]], hits = [[1,0]]
    Output: [2]
    Explanation: Starting with the grid:
    [[1,0,0,0],
     [1,1,1,0]]
    We erase the underlined brick at (1,0), resulting in the grid:
    [[1,0,0,0],
     [0,1,1,0]]
    The two underlined bricks are no longer stable as they are no longer connected to the top nor adjacent to another stable brick, so they will fall. The resulting grid is:
    [[1,0,0,0],
     [0,0,0,0]]
    Hence the result is [2].

  Example 2:
    Input: grid = [[1,0,0,0],[1,1,0,0]], hits = [[1,1],[1,0]]
    Output: [0,0]
    Explanation: Starting with the grid:
    [[1,0,0,0],
     [1,1,0,0]]
    We erase the underlined brick at (1,1), resulting in the grid:
    [[1,0,0,0],
     [1,0,0,0]]
    All remaining bricks are still stable, so no bricks fall. The grid remains the same:
    [[1,0,0,0],
     [1,0,0,0]]
    Next, we erase the underlined brick at (1,0), resulting in the grid:
    [[1,0,0,0],
     [0,0,0,0]]
    Once again, all remaining bricks are still stable, so no bricks fall.
    Hence the result is [0,0].

  Constraints:
    m == grid.length
    n == grid[i].length
    1 <= m, n <= 200
    grid[i][j] is 0 or 1.
    1 <= hits.length <= 4 * 104
    hits[i].length == 2
    0 <= xi <= m - 1
    0 <= yi <= n - 1
    All (xi, yi) are unique.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/bricks-falling-when-hit
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Union-Find + BFS

/**
 * @param {number[][]} grid
 * @param {number[][]} hits
 * @return {number[]}
 */
var hitBricks = function (grid, hits) {
    let out = []

    // hit all bricks in hits array
    for (let hit of hits) {
        let i = hit[0], j = hit[1]
        if (grid[i][j] === 0) {
            out.push(0)
        } else {
            out.push(-1)
            grid[i][j] = 0
        }
    }

    let count = 0
    let queue = []
    let m = grid.length, n = grid[0].length

    // put all top brick in queue
    for (let j = 0; j < n; j++) {
        if (grid[0][j] === 0) { continue }
        count++
        queue.push([0, j])
    }

    let uf = new unionFind(m * n)

    // union all stable brick
    while (queue.length > 0) {
        let brick = queue.shift()
        let i = brick[0], j = brick[1]
        let idx = i * n + j
        for (let move of moves) {
            let ni = i + move[0], nj = j + move[1]
            let newIdx = ni * n + nj
            if (ni < 1 || m - 1 < ni || nj < 0 || n - 1 < nj ||
                grid[ni][nj] === 0 || uf.find(newIdx) < n) {
                continue
            }
            uf.union(newIdx, idx)
            count++
            queue.push([ni, nj])
        }
    }

    // restore broken bricks in reverse order
    for (let k = hits.length - 1; k >= 0; k--) {
        if (out[k] !== -1) { continue }

        let i = hits[k][0], j = hits[k][1]
        let idx = i * n + j
        grid[i][j] = 1
        let cur = count + 1

        // if restore's brick near to stable brick, union it
        for (let move of moves) {
            let ni = i + move[0], nj = j + move[1]
            let newIdx = ni * n + nj
            if (ni < 0 || m - 1 < ni || nj < 0 || n - 1 < nj ||
                grid[ni][nj] === 0 || uf.find(newIdx) >= n) {
                continue
            }
            uf.union(idx, newIdx)
            break
        }

        let queue = []
        if (uf.find(idx) < n) { queue.push([i, j]) }

        // union all bricks that are not stable
        while (queue.length > 0) {
            let brick = queue.shift()
            let i = brick[0], j = brick[1]
            let idx = i * n + j
            for (let move of moves) {
                let ni = i + move[0], nj = j + move[1]
                let newIdx = ni * n + nj
                if (ni < 1 || m - 1 < ni || nj < 0 || n - 1 < nj ||
                    grid[ni][nj] === 0 || uf.find(newIdx) < n) {
                    continue
                }
                uf.union(newIdx, idx)
                cur++
                queue.push([ni, nj])
            }
        }

        out[k] = cur - count - 1
        count = cur
    }

    return out
}

const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]]

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

export { hitBricks }
