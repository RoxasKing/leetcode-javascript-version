/*
  给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

  例如：
  给定二叉树 [3,9,20,null,null,15,7],
        3
       / \
      9  20
        /  \
       15   7
  返回锯齿形层次遍历如下：
    [
      [3],
      [20,9],
      [15,7]
    ]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (root === null) {
        return []
    }
    let out = []
    let queue = [root]
    let reverse = false
    while (queue.length > 0) {
        let n = queue.length
        let tmp = []
        for (let i = 0; i < n; i++) {
            tmp.push(queue[i].val)
            if (queue[i].left != null) {
                queue.push(queue[i].left)
            }
            if (queue[i].right != null) {
                queue.push(queue[i].right)
            }
        }
        if (reverse) {
            for (let i = 0; i < n >> 1; i++) {
                [tmp[i], tmp[n - 1 - i]] = [tmp[n - 1 - i], tmp[i]]
            }
        }
        out.push(tmp)
        queue = queue.slice(n)
        reverse = !reverse
    }
    return out
}

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

export { zigzagLevelOrder, TreeNode }
