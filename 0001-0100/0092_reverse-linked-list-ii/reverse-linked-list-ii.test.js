import { reverseBetween, ListNode } from './reverse-linked-list-ii.js'
import assert from 'assert'

describe('reverseBetween()', () => {
    let tests = [
        { args: { head: [1, 2, 3, 4, 5], m: 2, n: 4 }, expected: [1, 4, 3, 2, 5] },
        { args: { head: [5], m: 1, n: 1 }, expected: [5] },
    ]

    tests.forEach((test) => {
        let head = arr2list(test.args.head), m = test.args.m, n = test.args.n
        it(`reverseBetween([${head}], ${m}, ${n}) === ${test.expected}`, () => {
            assert.deepStrictEqual(list2arr(reverseBetween(head, m, n)), test.expected)
        })
    })
})

/**
 * 
 * @param {number[]} nums 
 * @return {ListNode}
 */
function arr2list(nums) {
    if (nums.length === 0) { return null }
    let head = new ListNode(nums[nums.length - 1])
    for (let i = nums.length - 2; i >= 0; i--) {
        head = new ListNode(nums[i], head)
    }
    return head
}

/**
 * 
 * @param {ListNode} root
 * @return {number[]}
 */
function list2arr(root) {
    let out = []
    while (root !== null) {
        out.push(root.val)
        root = root.next
    }
    return out
}
