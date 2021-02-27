/*
  Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
  Find all the elements of [1, n] inclusive that do not appear in this array.
  Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

  Example:
    Input:
    [4,3,2,7,8,2,3,1]
    Output:
    [5,6]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let n = nums.length
    for (let i = 0; i < n; i++) {
        let j = nums[i] - 1
        while (i !== j && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j = nums[i] - 1
        }
    }
    let out = []
    for (let i = 0; i < n; i++) {
        if (i !== nums[i] - 1) {
            out.push(i + 1)
        }
    }
    return out
}

export { findDisappearedNumbers }
