/*
  Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

  The solution set must not contain duplicate subsets. Return the solution in any order.

  Example 1:
    Input: nums = [1,2,2]
    Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

  Example 2:
    Input: nums = [0]
    Output: [[],[0]]

  Constraints:
    1 <= nums.length <= 10
    -10 <= nums[i] <= 10

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/subsets-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// DFS + Backtracking

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0)
    let out = []
    for (let size = 0; size <= nums.length; size++) {
        dfs(nums, 0, size, [], out)
    }
    return out
}

/**
 * @param {number[]} nums
 * @param {number} idx
 * @param {number} size
 * @param {number[]} subset
 * @param {number[][]} out
 * @return {void}
 */
function dfs(nums, idx, size, subset, out) {
    if (subset.length === size) {
        out.push([...subset])
        return
    }
    if (idx === nums.length) { return }

    subset.push(nums[idx])
    dfs(nums, idx + 1, size, subset, out)
    subset.pop()

    let next = idx + 1
    while (next < nums.length && nums[next] === nums[idx]) { next++ }
    dfs(nums, next, size, subset, out)
}

export { subsetsWithDup }
