/*
  Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

  Example 1:
    Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
    Output: 32

  Example 2:
    Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
    Output: 23

  Constraints:
    1. The number of nodes in the tree is in the range [1, 2 * 10^4].
    2. 1 <= Node.val <= 10^5
    3. 1 <= low <= high <= 10^5
    4. All Node.val are unique.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/range-sum-of-bst
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let out = 0
    while (root !== null) {
        if (root.left !== null) {
            let pre = root.left
            while (pre.right !== null && pre.right !== root) {
                pre = pre.right
            }
            if (pre.right !== root) {
                pre.right = root
                root = root.left
                continue
            }
            pre.right = null
        }
        if (low <= root.val && root.val <= high) {
            out += root.val
        }
        root = root.right
    }
    return out
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

export { rangeSumBST, TreeNode }
