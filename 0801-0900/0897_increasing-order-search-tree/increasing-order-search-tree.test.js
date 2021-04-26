import { increasingBST, TreeNode } from './increasing-order-search-tree.js'
import assert from 'assert'

describe('increasingBST()', () => {
    let n1 = new TreeNode(1)
    let n2 = new TreeNode(2)
    let n3 = new TreeNode(3)
    let n4 = new TreeNode(4)
    let n5 = new TreeNode(5)
    let n6 = new TreeNode(6)
    let n7 = new TreeNode(7)
    let n8 = new TreeNode(8)
    let n9 = new TreeNode(9)
    n5.left = n3
    n5.right = n6
    n3.left = n2
    n3.right = n4
    n2.left = n1
    n6.right = n8
    n8.left = n7
    n8.right = n9

    let nn1 = new TreeNode(1)
    let nn2 = new TreeNode(2)
    let nn3 = new TreeNode(3)
    let nn4 = new TreeNode(4)
    let nn5 = new TreeNode(5)
    let nn6 = new TreeNode(6)
    let nn7 = new TreeNode(7)
    let nn8 = new TreeNode(8)
    let nn9 = new TreeNode(9)
    nn1.right = nn2
    nn2.right = nn3
    nn3.right = nn4
    nn4.right = nn5
    nn5.right = nn6
    nn6.right = nn7
    nn7.right = nn8
    nn8.right = nn9

    let tests = [
        { args: n5, expected: nn1 },
    ]

    tests.forEach((test) => {
        it(`increasingBST(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(increasingBST(test.args), test.expected)
        })
    })
})
