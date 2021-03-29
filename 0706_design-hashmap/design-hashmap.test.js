import { MyHashMap } from './design-hashmap.js'
import assert from 'assert'

describe('MyHashMap()', () => {
    let m = new MyHashMap()
    m.put(1, 1)
    m.put(2, 2)

    it(`m.get(1) === 1`, () => {
        assert.deepStrictEqual(m.get(1), 1)
    })

    it(`m.get(3) === -1`, () => {
        assert.deepStrictEqual(m.get(3), -1)
    })

    it(`m.get(2) === 1`, () => {
        m.put(2, 1)
        assert.deepStrictEqual(m.get(2), 1)
    })

    it(`m.get(2) === -1`, () => {
        m.remove(2)
        assert.deepStrictEqual(m.get(2), -1)
    })
})
