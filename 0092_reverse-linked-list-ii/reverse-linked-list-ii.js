/*
  Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

  Example 1:
    Input: head = [1,2,3,4,5], left = 2, right = 4
    Output: [1,4,3,2,5]

  Example 2:
    Input: head = [5], left = 1, right = 1
    Output: [5]

  Constraints:
    1. The number of nodes in the list is n.
    2. 1 <= n <= 500
    3. -500 <= Node.val <= 500
    4. 1 <= left <= right <= n

  Follow up: Could you do it in one pass?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    let headPre = new ListNode(undefined, head)
    let leftPre = headPre
    for (let i = 1; i < m; i++) {
        leftPre = leftPre.next
    }
    let right = leftPre.next
    for (let i = m; i < n; i++) {
        let node = right.next
        right.next = right.next.next
        node.next = leftPre.next
        leftPre.next = node
    }
    return headPre.next
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

export { reverseBetween, ListNode }
