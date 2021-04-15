/*
  Two strings X and Y are similar if we can swap two letters (in different positions) of X, so that it equals Y. Also two strings X and Y are similar if they are equal.

  For example, "tars" and "rats" are similar (swapping at positions 0 and 2), and "rats" and "arts" are similar, but "star" is not similar to "tars", "rats", or "arts".

  Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}.  Notice that "tars" and "arts" are in the same group even though they are not similar.  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.

  We are given a list strs of strings where every string in strs is an anagram of every other string in strs. How many groups are there?

  Example 1:
    Input: strs = ["tars","rats","arts","star"]
    Output: 2

  Example 2:
    Input: strs = ["omv","ovm"]
    Output: 1

  Constraints:
    1 <= strs.length <= 100
    1 <= strs[i].length <= 1000
    sum(strs[i].length) <= 2 * 104
    strs[i] consists of lowercase letters only.
    All words in strs have the same length and are anagrams of each other.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/similar-string-groups
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Union-Find

/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function (strs) {
    let n = strs.length
    let uf = new unionFind(n)
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isSimilar(strs[i], strs[j])) { uf.union(i, j) }
        }
    }
    let mark = new Map()
    let out = 0
    for (let i = 0; i < n; i++) {
        let x = uf.find(i)
        if (!mark.has(x)) {
            out++
            mark.set(x, undefined)
        }
    }
    return out
}

/**
 * 
 * @param {string} s1 
 * @param {string} s2 
 */
function isSimilar(s1, s2) {
    let count = 0
    for (let i = 0; i < s1.length; i++) {
        if (s1.charAt(i) !== s2.charAt(i)) {
            count++
            if (count > 2) { return false }
        }
    }
    return true
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

export { numSimilarGroups }
