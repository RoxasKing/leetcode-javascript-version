/*
  Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

  Example 1:
    Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
    Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

  Example 2:
    Input: root = [5,1,7]
    Output: [1,null,5,null,7]

  Constraints:
    1. The number of nodes in the given tree will be in the range [1, 100].
    2. 0 <= Node.val <= 1000

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/increasing-order-search-tree
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let head = null, pre = null
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
            root.left = null
        }
        if (head === null) { head = root }
        if (pre !== null) { pre.right = root }
        pre = root
        root = root.right
    }
    return head
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

export { increasingBST, TreeNode }
