/*
  There are n items each belonging to zero or one of m groups where group[i] is the group that the i-th item belongs to and it's equal to -1 if the i-th item belongs to no group. The items and the groups are zero indexed. A group can have no item belonging to it.

  Return a sorted list of the items such that:
    The items that belong to the same group are next to each other in the sorted list.
  There are some relations between these items where beforeItems[i] is a list containing all the items that should come before the i-th item in the sorted array (to the left of the i-th item).

  Return any solution if there is more than one solution and return an empty list if there is no solution.

  Example 1:
    Input: n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]
    Output: [6,3,4,1,5,2,0,7]

  Example 2:
    Input: n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3],[],[4],[]]
    Output: []
    Explanation: This is the same as example 1 except that 4 needs to be before 6 in the sorted list.

  Constraints:
    1 <= m <= n <= 3 * 104
    group.length == beforeItems.length == n
    -1 <= group[i] <= m - 1
    0 <= beforeItems[i].length <= n - 1
    0 <= beforeItems[i][j] <= n - 1
    i != beforeItems[i][j]
    beforeItems[i] does not contain duplicates elements.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/sort-items-by-groups-respecting-dependencies
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Topological Sorting

/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function (n, m, group, beforeItems) {
    let itemEdges = new Map()
    let itemIndeg = new Array(n).fill(0)

    let groupDepends = new Map()
    let groupEdges = new Map()
    let groupIndeg = new Array(m).fill(0)

    for (let i = 0; i < beforeItems.length; i++) {
        for (let j of beforeItems[i]) {
            if (!itemEdges.has(j)) {
                itemEdges.set(j, [])
            }
            itemEdges.get(j).push(i)
            itemIndeg[i]++

            let groupI = group[i]
            let groupJ = group[j]
            if (groupI === -1 || groupJ === -1 || groupI == groupJ ||
                groupDepends.has(groupI) &&
                groupDepends.get(groupI).has(groupJ) &&
                groupDepends.get(groupI).get(groupJ)) {
                continue
            }
            if (!groupDepends.has(groupI)) {
                groupDepends.set(groupI, new Map())
            }
            groupDepends.get(groupI).set(groupJ, true)

            if (groupDepends.has(groupJ) &&
                groupDepends.get(groupJ).has(groupI) &&
                groupDepends.get(groupJ).get(groupI)) {
                return []
            }

            if (!groupEdges.has(groupJ)) {
                groupEdges.set(groupJ, [])
            }
            groupEdges.get(groupJ).push(groupI)
            groupIndeg[groupI]++
        }
    }

    let itemQ = []
    for (let i = 0; i < n; i++) {
        if (itemIndeg[i] === 0) {
            itemQ.push(i)
        }
    }

    let count = 0
    let added = new Array(n).fill(false)
    let groupItemsAll = new Map()
    let groupBeforeSelf = new Map()
    let groupBeforeOther = new Map()

    while (itemQ.length > 0) {
        let i = itemQ.shift()
        let groupI = group[i]
        if (count === n) {
            return []
        }
        count++
        if (groupI !== -1 && !added[i]) {
            if (!groupItemsAll.has(groupI)) {
                groupItemsAll.set(groupI, [])
            }
            groupItemsAll.get(groupI).push(i)
        }
        if (!itemEdges.has(i)) {
            continue
        }
        for (let j of itemEdges.get(i)) {
            let groupJ = group[j]
            if (groupJ !== -1) {
                if (!added[j]) {
                    if (!groupItemsAll.has(groupJ)) {
                        groupItemsAll.set(groupJ, [])
                    }
                    groupItemsAll.get(groupJ).push(j)
                }
                if (added[i]) {
                    continue
                }
                if (group[i] === group[j]) {
                    if (!groupBeforeSelf.has(groupJ)) {
                        groupBeforeSelf.set(groupJ, [])
                    }
                    groupBeforeSelf.get(groupJ).push(i)
                } else {
                    if (!groupBeforeOther.has(groupJ)) {
                        groupBeforeOther.set(groupJ, [])
                    }
                    groupBeforeOther.get(groupJ).push(i)
                }
            }
            itemIndeg[j]--
            if (itemIndeg[j] === 0) {
                itemQ.push(j)
            }
        }
    }

    if (count !== n) {
        return []
    }

    let mark = new Array(n).fill(false)
    let out = []

    let groupQ = []
    for (let g = 0; g < m; g++) {
        if (groupIndeg[g] === 0) {
            groupQ.push(g)
        }
    }

    while (groupQ.length > 0) {
        let groupIdx = groupQ.shift()
        if (groupBeforeOther.has(groupIdx)) {
            for (let i of groupBeforeOther.get(groupIdx)) {
                if (!mark[i]) {
                    out.push(i)
                    mark[i] = true
                }
            }
        }
        if (groupBeforeSelf.has(groupIdx)) {
            for (let i of groupBeforeSelf.get(groupIdx)) {
                if (!mark[i]) {
                    out.push(i)
                    mark[i] = true
                }
            }
        }
        if (groupItemsAll.has(groupIdx)) {
            for (let i of groupItemsAll.get(groupIdx)) {
                if (!mark[i]) {
                    out.push(i)
                    mark[i] = true
                }
            }
        }
        if (groupEdges.has(groupIdx)) {
            for (let g of groupEdges.get(groupIdx)) {
                groupIndeg[g]--
                if (groupIndeg[g] === 0) {
                    groupQ.push(g)
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!mark[i]) {
            out.push(i)
        }
    }

    return out
}

export { sortItems }
