import { deleteDuplicates, ListNode } from './remove-duplicates-from-sorted-list.js'
import assert from 'assert'

describe('deleteDuplicates()', () => {
    let tests = [
        { args: [1, 1, 2], expected: [1, 2] },
        { args: [1, 1, 2, 3, 3], expected: [1, 2, 3] },
    ]

    tests.forEach((test) => {
        it(`deleteDuplicates(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(list2arr(deleteDuplicates(arr2list(test.args))), test.expected)
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
