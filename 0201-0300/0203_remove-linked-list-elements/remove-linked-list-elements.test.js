import { removeElements, ListNode } from './remove-linked-list-elements.js'
import assert from 'assert'

describe('removeElements()', () => {
    let a11 = new ListNode(1)
    let a12 = new ListNode(2)
    let a13 = new ListNode(6)
    let a14 = new ListNode(3)
    let a15 = new ListNode(4)
    let a16 = new ListNode(5)
    let a17 = new ListNode(6)
    a11.next = a12
    a12.next = a13
    a13.next = a14
    a14.next = a15
    a15.next = a16
    a16.next = a17

    let a21 = new ListNode(1)
    let a22 = new ListNode(2)
    let a23 = new ListNode(3)
    let a24 = new ListNode(4)
    let a25 = new ListNode(5)
    a21.next = a22
    a22.next = a23
    a23.next = a24
    a24.next = a25

    let c1 = new ListNode(7)
    let c2 = new ListNode(7)
    let c3 = new ListNode(7)
    let c4 = new ListNode(7)
    c1.next = c2
    c2.next = c3
    c3.next = c4

    let tests = [
        { args: { head: a11, val: 6 }, expected: a21 },
        { args: { head: null, val: 1 }, expected: null },
        { args: { head: c1, val: 7 }, expected: null },
    ]

    tests.forEach((test) => {
        let args = test.args
        let head = args.head, val = args.val
        it(`removeElements(${head}, ${val}) === ${test.expected}`, () => {
            assert.deepStrictEqual(removeElements(head, val), test.expected)
        })
    })
})
