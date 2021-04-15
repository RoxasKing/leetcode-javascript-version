/*
  Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

  Example 1:
    Input: head = [1,2,3,3,4,4,5]
    Output: [1,2,5]

  Example 2:
    Input: head = [1,1,1,2,3]
    Output: [2,3]

  Constraints:
    1. The number of nodes in the list is in the range [0, 300].
    2. -100 <= Node.val <= 100
    3. The list is guaranteed to be sorted in ascending order.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null) { return head }
    let headPre = new ListNode(-1, head)
    let ptr = headPre
    let isDup = false
    for (let n = head.next; n !== null; n = n.next) {
        if (n.val === ptr.next.val) {
            isDup = true
        } else {
            if (isDup) {
                ptr.next = n
            } else {
                ptr = ptr.next
            }
            isDup = false
        }
    }
    if (isDup) {
        ptr.next = null
    }
    return headPre.next
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

export { deleteDuplicates, ListNode }
