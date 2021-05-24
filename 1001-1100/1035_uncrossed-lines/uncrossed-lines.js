/*
  We write the integers of nums1 and nums2 (in the order they are given) on two separate horizontal lines.

  Now, we may draw connecting lines: a straight line connecting two numbers nums1[i] and nums2[j] such that:

    1. nums1[i] == nums2[j];
    2. The line we draw does not intersect any other connecting (non-horizontal) line.

  Note that a connecting lines cannot intersect even at the endpoints: each number can only belong to one connecting line.

  Return the maximum number of connecting lines we can draw in this way.

  Example 1:
    Input: nums1 = [1,4,2], nums2 = [1,2,4]
    Output: 2
    Explanation: We can draw 2 uncrossed lines as in the diagram.
    We cannot draw 3 uncrossed lines, because the line from nums1[1]=4 to nums2[2]=4 will intersect the line from nums1[2]=2 to nums2[1]=2.

  Example 2:
    Input: nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
    Output: 3

  Example 3:
    Input: nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
    Output: 2

  Note:
    1. 1 <= nums1.length <= 500
    2. 1 <= nums2.length <= 500
    3. 1 <= nums1[i], nums2[i] <= 2000

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/uncrossed-lines
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Dynamic Programming

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
    let n = nums2.length
    let f0 = new Array(n + 1).fill(0)
    let f1 = new Array(n + 1).fill(0)
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            f1[j + 1] = f0[j]
            if (nums1[i] === nums2[j]) { f1[j + 1]++ }
            f1[j + 1] = Math.max(f1[j + 1], Math.max(f0[j + 1], f1[j]))
        }
        [f0, f1] = [f1, f0]
    }
    return f0[n2]
}

export { maxUncrossedLines }
