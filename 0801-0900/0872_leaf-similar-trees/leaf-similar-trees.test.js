import { leafSimilar, TreeNode } from './leaf-similar-trees.js'
import assert from 'assert'

describe('leafSimilar()', () => {
    let a1 = new TreeNode(3)
    let a2 = new TreeNode(5)
    let a3 = new TreeNode(1)
    let a4 = new TreeNode(6)
    let a5 = new TreeNode(2)
    let a6 = new TreeNode(9)
    let a7 = new TreeNode(8)
    let a8 = new TreeNode(7)
    let a9 = new TreeNode(4)
    a1.left = a2
    a1.right = a3
    a2.left = a4
    a2.right = a5
    a3.left = a6
    a3.right = a7
    a5.left = a8
    a5.right = a9

    let b1 = new TreeNode(3)
    let b2 = new TreeNode(5)
    let b3 = new TreeNode(1)
    let b4 = new TreeNode(6)
    let b5 = new TreeNode(7)
    let b6 = new TreeNode(4)
    let b7 = new TreeNode(2)
    let b8 = new TreeNode(9)
    let b9 = new TreeNode(8)
    b1.left = b2
    b1.right = b3
    b2.left = b4
    b2.right = b5
    b3.left = b6
    b3.right = b7
    b7.left = b8
    b7.right = b9

    let tests = [
        { args: { root1: a1, root2: b1 }, expected: true },
    ]

    tests.forEach((test) => {
        let args = test.args
        let root1 = args.root1, root2 = args.root2
        it(`leafSimilar(${root1}, ${root2}) === ${test.expected}`, () => {
            assert.deepStrictEqual(leafSimilar(root1, root2), test.expected)
        })
    })
})
