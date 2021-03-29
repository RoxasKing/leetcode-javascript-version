import { BSTIterator, TreeNode } from './binary-search-tree-iterator.js'
import assert from 'assert'

describe('BSTIterator()', () => {
    let root = new TreeNode(7)
    let node1 = new TreeNode(3)
    let node2 = new TreeNode(15)
    let node3 = new TreeNode(9)
    let node4 = new TreeNode(20)
    root.left = node1
    root.right = node2
    node2.left = node3
    node2.right = node4

    let bi = new BSTIterator(root)

    it(`bi.next() === 3`, () => {
        assert.deepStrictEqual(bi.next(), 3)
    })
    it(`bi.next() === 7`, () => {
        assert.deepStrictEqual(bi.next(), 7)
    })
    it(`bi.hasNext() === true`, () => {
        assert.deepStrictEqual(bi.hasNext(), true)
    })
    it(`bi.next() === 9`, () => {
        assert.deepStrictEqual(bi.next(), 9)
    })
    it(`bi.hasNext() === true`, () => {
        assert.deepStrictEqual(bi.hasNext(), true)
    })
    it(`bi.next() === 15`, () => {
        assert.deepStrictEqual(bi.next(), 15)
    })
    it(`bi.hasNext() === true`, () => {
        assert.deepStrictEqual(bi.hasNext(), true)
    })
    it(`bi.next() === 20`, () => {
        assert.deepStrictEqual(bi.next(), 20)
    })
    it(`bi.hasNext() === false`, () => {
        assert.deepStrictEqual(bi.hasNext(), false)
    })
})
