/*
  In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

  Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

  We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

  Return true if and only if the nodes corresponding to the values x and y are cousins.

  Example 1:
    Input: root = [1,2,3,4], x = 4, y = 3
    Output: false

  Example 2:
    Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
    Output: true

  Example 3:
    Input: root = [1,2,3,null,4], x = 2, y = 3
    Output: false

  Constraints:
    The number of nodes in the tree will be between 2 and 100.
    Each node has a unique integer value from 1 to 100.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/cousins-in-binary-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// BFS

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let q = [root]
    while (q.length > 0) {
        let size = q.length
        let tmp = []
        for (let i = 0; i < size; i++) {
            if (q[i].left !== null) {
                if (q[i].left.val == x || q[i].left.val == y) { tmp.push(q[i]) }
                q.push(q[i].left)
            }
            if (q[i].right !== null) {
                if (q[i].right.val == x || q[i].right.val == y) { tmp.push(q[i]) }
                q.push(q[i].right)
            }
        }
        if (tmp.length === 2) { return tmp[0] !== tmp[1] }
        if (tmp.length === 1) { return false }
        q = q.slice(size)
    }
    return false
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

export { isCousins, TreeNode }
