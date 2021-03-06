/*
  给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
  你应当保留两个分区中每个节点的初始相对位置。

  示例:
    输入: head = 1->4->3->2->5->2, x = 3
    输出: 1->2->2->4->3->5

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/partition-list
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let leftHead = new ListNode(-1)
    let leftTail = leftHead
    let rightHead = new ListNode(-1)
    let rightTail = rightHead
    for (let n = head; n != null; n = n.next) {
        if (n.val < x) {
            leftTail.next = n
            leftTail = leftTail.next
        } else {
            rightTail.next = n
            rightTail = rightTail.next
        }
    }
    leftTail.next = rightHead.next
    rightTail.next = null
    return leftHead.next
}

function ListNode(val) {
    this.val = val
    this.next = null
}

export { partition, ListNode }
