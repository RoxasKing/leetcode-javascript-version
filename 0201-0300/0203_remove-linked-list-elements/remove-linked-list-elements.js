/*
  Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

  Example 1:
    Input: head = [1,2,6,3,4,5,6], val = 6
    Output: [1,2,3,4,5]

  Example 2:
    Input: head = [], val = 1
    Output: []

  Example 3:
    Input: head = [7,7,7,7], val = 7
    Output: []

  Constraints:
    1. The number of nodes in the list is in the range [0, 10^4].
    2. 1 <= Node.val <= 50
    3. 0 <= k <= 50

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/remove-linked-list-elements
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let headPre = new ListNode(-1, head)
    let ptr = headPre
    while (ptr.next !== null) {
        if (ptr.next.val === val) {
            ptr.next = ptr.next.next
        } else {
            ptr = ptr.next
        }
    }
    return headPre.next
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

export { removeElements, ListNode }
