import { Trie } from './implement-trie-prefix-tree.js'
import assert from 'assert'

describe('Trie()', () => {
    let trie = new Trie()
    trie.insert('apple')
    it(`trie.search('apple') === true`, () => {
        assert.deepStrictEqual(trie.search('apple'), true)
    })
    it(`trie.search('app') === false`, () => {
        assert.deepStrictEqual(trie.search('app'), false)
    })
    it(`trie.startsWith('app') === true`, () => {
        assert.deepStrictEqual(trie.startsWith('app'), true)
    })
    it(`trie.search('app') === true`, () => {
        trie.insert('app')
        assert.deepStrictEqual(trie.search('app'), true)
    })
})
