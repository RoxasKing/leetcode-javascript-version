/*
  Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

  For example, the following two linked lists begin to intersect at node c1:

  It is guaranteed that there are no cycles anywhere in the entire linked structure.

  Note that the linked lists must retain their original structure after the function returns.

  Example 1:
    Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
    Output: Intersected at '8'
    Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
      From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

  Example 2:
    Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
    Output: Intersected at '2'
    Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
      From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

  Example 3:
    Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
    Output: No intersection
    Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
    Explanation: The two lists do not intersect, so return null.

  Constraints:
    1. The number of nodes of listA is in the m.
    2. The number of nodes of listB is in the n.
    3. 0 <= m, n <= 3 * 10^4
    4. 1 <= Node.val <= 10^5
    5. 0 <= skipA <= m
    6. 0 <= skipB <= n
    7. intersectVal is 0 if listA and listB do not intersect.
    8. intersectVal == listA[skipA + 1] == listB[skipB + 1] if listA and listB intersect.

  Follow up: Could you write a solution that runs in O(n) time and use only O(1) memory?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Two Pointers

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let pa = headA, pb = headB
    while (pa != pb) {
        if (pa !== null) {
            pa = pa.next
        } else {
            pa = headB
        }
        if (pb !== null) {
            pb = pb.next
        } else {
            pb = headA
        }
    }
    return pa
}

function ListNode(val) {
    this.val = val
    this.next = null
}

export { getIntersectionNode, ListNode }
