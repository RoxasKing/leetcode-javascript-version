import { isCousins, TreeNode } from './cousins-in-binary-tree.js'
import assert from 'assert'

describe('isCousins()', () => {
    let a1 = new TreeNode(1)
    let a2 = new TreeNode(2)
    let a3 = new TreeNode(3)
    let a4 = new TreeNode(4)
    a1.left = a2
    a1.right = a3
    a2.left = a4

    let b1 = new TreeNode(1)
    let b2 = new TreeNode(2)
    let b3 = new TreeNode(3)
    let b4 = new TreeNode(4)
    let b5 = new TreeNode(5)
    b1.left = b2
    b1.right = b3
    b2.right = b4
    b3.right = b5

    let c1 = new TreeNode(1)
    let c2 = new TreeNode(2)
    let c3 = new TreeNode(3)
    let c4 = new TreeNode(4)
    c1.left = c2
    c1.right = c3
    c2.right = c4

    let tests = [
        { args: { root: a1, x: 4, y: 3 }, expected: false },
        { args: { root: b1, x: 5, y: 4 }, expected: true },
        { args: { root: c1, x: 2, y: 3 }, expected: false },
    ]

    tests.forEach((test) => {
        let args = test.args
        let root = args.root, x = args.x, y = args.y
        it(`isCousins(${root}, ${x}, ${y}) === ${test.expected}`, () => {
            assert.deepStrictEqual(isCousins(root, x, y), test.expected)
        })
    })
})
