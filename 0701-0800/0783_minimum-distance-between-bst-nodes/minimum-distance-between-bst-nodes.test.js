import { minDiffInBST, TreeNode } from './minimum-distance-between-bst-nodes.js'
import assert from 'assert'

describe('minDiffInBST()', () => {
    let n1 = new TreeNode(4)
    let n2 = new TreeNode(2)
    let n3 = new TreeNode(6)
    let n4 = new TreeNode(1)
    let n5 = new TreeNode(3)
    n1.left = n2
    n1.right = n3
    n2.left = n4
    n2.right = n5

    let n6 = new TreeNode(1)
    let n7 = new TreeNode(0)
    let n8 = new TreeNode(48)
    let n9 = new TreeNode(12)
    let n10 = new TreeNode(49)
    n6.left = n7
    n6.right = n8
    n8.left = n9
    n8.right = n10

    let tests = [
        { args: n1, expected: 1 },
        { args: n6, expected: 1 },
    ]

    tests.forEach((test) => {
        it(`minDiffInBST(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(minDiffInBST(test.args), test.expected)
        })
    })
})
