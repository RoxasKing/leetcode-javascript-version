import { rangeSumBST, TreeNode } from './range-sum-of-bst.js'
import assert from 'assert'

describe('rangeSumBST()', () => {
    let a1 = new TreeNode(10)
    let a2 = new TreeNode(5)
    let a3 = new TreeNode(15)
    let a4 = new TreeNode(3)
    let a5 = new TreeNode(7)
    let a6 = new TreeNode(18)
    a1.left = a2
    a1.right = a3
    a2.left = a4
    a2.right = a5
    a3.right = a6

    let b1 = new TreeNode(10)
    let b2 = new TreeNode(5)
    let b3 = new TreeNode(15)
    let b4 = new TreeNode(3)
    let b5 = new TreeNode(7)
    let b6 = new TreeNode(13)
    let b7 = new TreeNode(18)
    let b8 = new TreeNode(1)
    let b9 = new TreeNode(6)
    b1.left = b2
    b1.right = b3
    b2.left = b4
    b2.right = b5
    b3.left = b6
    b3.right = b7
    b4.left = b8
    b5.left = b9

    let tests = [
        { args: { root: a1, low: 7, high: 15 }, expected: 32 },
        { args: { root: b1, low: 6, high: 10 }, expected: 23 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let root = args.root, low = args.low, high = args.high
        it(`rangeSumBST(${root}, ${low}, ${high}) === ${test.expected}`, () => {
            assert.deepStrictEqual(rangeSumBST(root, low, high), test.expected)
        })
    })
})
