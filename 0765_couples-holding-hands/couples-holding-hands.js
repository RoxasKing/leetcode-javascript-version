/*
  N couples sit in 2N seats arranged in a row and want to hold hands. We want to know the minimum number of swaps so that every couple is sitting side by side. A swap consists of choosing any two people, then they stand up and switch seats.

  The people and seats are represented by an integer from 0 to 2N-1, the couples are numbered in order, the first couple being (0, 1), the second couple being (2, 3), and so on with the last couple being (2N-2, 2N-1).

  The couples' initial seating is given by row[i] being the value of the person who is initially sitting in the i-th seat.

  Example 1:
    Input: row = [0, 2, 1, 3]
    Output: 1
    Explanation: We only need to swap the second (row[1]) and third (row[2]) person.

  Example 2:
    Input: row = [3, 2, 0, 1]
    Output: 0
    Explanation: All couples are already seated side by side.

  Note:
    1. len(row) is even and in the range of [4, 60].
    2. row is guaranteed to be a permutation of 0...len(row)-1.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/couples-holding-hands
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Union-Find

/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
  let n = row.length >> 1
  let uf = new unionFind(n)
  for (let i = 0; i < row.length; i += 2) {
    let c1 = row[i] >> 1, c2 = row[i + 1] >> 1
    if (c1 === c2) { continue }
    if (uf.find(c1) === uf.find(c2)) { continue }
    uf.union(c1, c2)
  }

  let out = 0
  let mark = new Map()
  for (let i = 0; i < n; i++) {
    let x = uf.find(i)
    if (mark.has(x)) {
      out++
      continue
    }
    mark.set(x, undefined)
  }
  return out
}

class unionFind {
  _parent = []
  _size = []

  /**
   * 
   * @param {number} n 
   */
  constructor(n) {
    for (let i = 0; i < n; i++) {
      this._parent.push(i)
      this._size.push(1)
    }
  }

  /**
   * 
   * @param {number} x 
   * @return {number}
   */
  find(x) {
    if (this._parent[x] !== x) { this._parent[x] = this.find(this._parent[x]) }

    return this._parent[x]
  }

  /**
   * 
   * @param {number} x 
   * @param {number} y 
   */
  union(x, y) {
    x = this.find(x)
    y = this.find(y)

    if (x === y) { return }

    if (this._size[x] < this._size[y]) { [x, y] = [y, x] }

    this._parent[y] = x
    this._size[x] += this._size[y]
  }
}

export { minSwapsCouples }
