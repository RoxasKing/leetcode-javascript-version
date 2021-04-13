/*
  Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

  Note: This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

  Example 1:
    Input: root = [4,2,6,1,3]
    Output: 1

  Example 2:
    Input: root = [1,0,48,null,null,12,49]
    Output: 1

  Constraints:
    1. The number of nodes in the tree is in the range [2, 100].
    2. 0 <= Node.val <= 10^5

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes
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
 * @return {number}
 */
var minDiffInBST = function (root) {
    let out = Infinity
    let preVal = -1
    while (root !== null) {
        if (root.left !== null) {
            let pre = root.left
            while (pre.right !== null && pre.right !== root) { pre = pre.right }
            if (pre.right !== root) {
                pre.right = root
                root = root.left
                continue
            }
            pre.right = null
        }
        if (preVal !== -1 && root.val - preVal < out) { out = root.val - preVal }
        preVal = root.val
        root = root.right
    }
    return out
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

export { minDiffInBST, TreeNode }
