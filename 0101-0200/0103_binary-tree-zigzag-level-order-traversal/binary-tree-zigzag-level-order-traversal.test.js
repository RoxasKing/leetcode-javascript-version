import { zigzagLevelOrder, TreeNode } from './binary-tree-zigzag-level-order-traversal.js'
import assert from 'assert'

describe('minCostClimbingStairs()', () => {
    let n0 = new TreeNode(3)
    let n1 = new TreeNode(9)
    let n2 = new TreeNode(20)
    let n3 = new TreeNode(15)
    let n4 = new TreeNode(7)
    n0.left = n1
    n0.right = n2
    n2.left = n3
    n2.right = n4

    let tests = [
        {
            args: n0,
            expected: [
                [3],
                [20, 9],
                [15, 7]
            ]
        },
    ]

    tests.forEach((test) => {
        it(`zigzagLevelOrder(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(zigzagLevelOrder(test.args), test.expected)
        })
    })
})
