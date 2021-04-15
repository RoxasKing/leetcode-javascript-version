import { rotateRight, ListNode } from './rotate-list.js'
import assert from 'assert'

describe('rotateRight()', () => {
    let tests = [
        { args: { head: [1, 2, 3, 4, 5], k: 2 }, expected: [4, 5, 1, 2, 3] },
        { args: { head: [0, 1, 2], k: 4 }, expected: [2, 0, 1] },
    ]

    tests.forEach((test) => {
        let head = arr2list(test.args.head), k = test.args.k
        it(`rotateRight(${test.args.head}, ${k}) === ${test.expected}`, () => {
            assert.deepStrictEqual(list2arr(rotateRight(head, k)), test.expected)
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
