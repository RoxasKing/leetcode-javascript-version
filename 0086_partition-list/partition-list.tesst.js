import { partition, ListNode } from './partition-list.js'
import assert from 'assert'

describe('partition()', () => {
  let n0 = new ListNode(1)
  let n1 = new ListNode(4)
  let n2 = new ListNode(3)
  let n3 = new ListNode(2)
  let n4 = new ListNode(5)
  let n5 = new ListNode(2)
  n0.next = n1
  n1.next = n2
  n2.next = n3
  n3.next = n4
  n4.next = n5

  let nn0 = new ListNode(1)
  let nn1 = new ListNode(4)
  let nn2 = new ListNode(3)
  let nn3 = new ListNode(2)
  let nn4 = new ListNode(5)
  let nn5 = new ListNode(2)
  nn0.next = nn3
  nn3.next = nn5
  nn5.next = nn1
  nn1.next = nn2
  nn2.next = nn4
  let tests = [
    { args: [n0, 3], expected: nn0 },
  ]

  tests.forEach((test) => {
    it(`partition(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(partition(...test.args), test.expected)
    })
  })
})
