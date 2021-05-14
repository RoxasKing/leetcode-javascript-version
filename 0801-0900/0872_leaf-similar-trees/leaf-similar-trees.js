/*
  Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

  For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

  Two binary trees are considered leaf-similar if their leaf value sequence is the same.

  Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

  Example 1:
    Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
    Output: true

  Example 2:
    Input: root1 = [1], root2 = [1]
    Output: true

  Example 3:
    Input: root1 = [1], root2 = [2]
    Output: false

  Example 4:
    Input: root1 = [1,2], root2 = [2,2]
    Output: true

  Example 5:
    Input: root1 = [1,2,3], root2 = [1,3,2]
    Output: false

  Constraints:
    1. The number of nodes in each tree will be in the range [1, 200].
    2. Both of the given trees will have values in the range [0, 200].

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/leaf-similar-trees
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Stack + DFS

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let arr1 = getAllLeaf(root1)
    let arr2 = getAllLeaf(root2)
    if (arr1.length !== arr2.length) { return false }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) { return false }
    }
    return true
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function getAllLeaf(root) {
    let out = []
    let stk = [root]
    while (stk.length > 0) {
        root = stk.pop()
        if (root.left === null && root.right === null) { out.push(root.val) }
        if (root.right !== null) { stk.push(root.right) }
        if (root.left !== null) { stk.push(root.left) }
    }
    return out
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

export { leafSimilar, TreeNode }
