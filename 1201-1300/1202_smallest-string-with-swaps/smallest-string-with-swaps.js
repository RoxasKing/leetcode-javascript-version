/*
  You are given a string s, and an array of pairs of indices in the string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.
  You can swap the characters at any pair of indices in the given pairs any number of times.
  Return the lexicographically smallest string that s can be changed to after using the swaps.

  Example 1:
    Input: s = "dcab", pairs = [[0,3],[1,2]]
    Output: "bacd"
    Explaination:
    Swap s[0] and s[3], s = "bcad"
    Swap s[1] and s[2], s = "bacd"

  Example 2:
    Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
    Output: "abcd"
    Explaination:
    Swap s[0] and s[3], s = "bcad"
    Swap s[0] and s[2], s = "acbd"
    Swap s[1] and s[2], s = "abcd"

  Example 3:
    Input: s = "cba", pairs = [[0,1],[1,2]]
    Output: "abc"
    Explaination:
    Swap s[0] and s[1], s = "bca"
    Swap s[1] and s[2], s = "bac"
    Swap s[0] and s[1], s = "abc"

  Constraints:
    1 <= s.length <= 10^5
    0 <= pairs.length <= 10^5
    0 <= pairs[i][0], pairs[i][1] < s.length
    s only contains lower case English letters.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/smallest-string-with-swaps
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Union-Find

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
    let n = s.length

    let uf = new unionFind(n)
    for (let pair of pairs) { uf.union(pair[0], pair[1]) }

    let groups = new Map()
    for (let i = 0; i < n; i++) {
        let a = uf.find(i)
        if (!groups.has(a)) { groups.set(a, []) }
        groups.get(a).push(i)
    }

    let ls = []
    for (let c of s) { ls.push(c) }

    for (let group of groups.values()) {
        if (group.length < 2) {
            continue
        }
        let arr = []
        for (let i = 0; i < group.length; i++) {
            arr.push(ls[group[i]])
        }
        arr.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))
        for (let i = 0; i < arr.length; i++) {
            ls[group[i]] = arr[i]
        }
    }

    return ls.join('')
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

        if (this.ancestor[x] != x) {
            this.ancestor[x] = this.find(this.ancestor[x])
        }

        this.isEnd[x] = false
        this.isEnd[this.ancestor[x]] = true

        return this.ancestor[x]
    }

    union(x, y) {
        let xAncestor = this.find(x)
        let yAncestor = this.find(y)
        this.ancestor[xAncestor] = yAncestor
        this.isEnd[xAncestor] = false
        this.isEnd[yAncestor] = true
    }
}

export { smallestStringWithSwaps }
