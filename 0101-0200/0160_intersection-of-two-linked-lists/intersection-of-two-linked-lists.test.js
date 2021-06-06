import { getIntersectionNode, ListNode } from './intersection-of-two-linked-lists.js'
import assert from 'assert'

describe('getIntersectionNode()', () => {
    let a1 = new ListNode(4)
    let a2 = new ListNode(1)
    let b1 = new ListNode(5)
    let b2 = new ListNode(6)
    let b3 = new ListNode(1)
    let c1 = new ListNode(8)
    let c2 = new ListNode(4)
    let c3 = new ListNode(5)

    a1.next = a2
    b1.next = b2
    b2.next = b3
    c1.next = c2
    c2.next = c3
    a2.next = c1
    b3.next = c1

    let tests = [
        { args: { headA: a1, headB: b1 }, expected: c1 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let headA = args.headA, headB = args.headB
        it(`getIntersectionNode(${headA}, ${headB}) === ${test.expected}`, () => {
            assert.deepStrictEqual(getIntersectionNode(headA, headB), test.expected)
        })
    })
})
