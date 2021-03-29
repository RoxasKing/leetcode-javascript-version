/*
  Given the head of a linked list, rotate the list to the right by k places.

  Example 1:
    Input: head = [1,2,3,4,5], k = 2
    Output: [4,5,1,2,3]

  Example 2:
    Input: head = [0,1,2], k = 4
    Output: [2,0,1]

  Constraints:
    1. The number of nodes in the list is in the range [0, 500].
    2. -100 <= Node.val <= 100
    3. 0 <= k <= 2 * 10^9

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/rotate-list
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Two Pointers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    let size = 0
    let headPre = new ListNode(-1, head)
    let last = headPre
    for (let n = head; n !== null; n = n.next) {
        size++
        last = last.next
    }

    k = size - (k % size)
    if (k === size) { return head }

    last.next = head
    let outPre = headPre
    while (k > 0) {
        outPre = outPre.next
        k--
    }

    let out = outPre.next
    outPre.next = null
    return out
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

export { rotateRight, ListNode }
