import { MyHashSet } from './design-hashset.js'
import assert from 'assert'

describe('MyHashSet()', () => {
    let ms = new MyHashSet()
    ms.add(1)
    ms.add(2)
    it(`ms.contains(1) === true`, () => {
        assert.deepStrictEqual(ms.contains(1), true)
    })
    it(`ms.contains(3) === false`, () => {
        assert.deepStrictEqual(ms.contains(3), false)
    })
    ms.remove(2)
    it(`ms.contains(2) === false`, () => {
        assert.deepStrictEqual(ms.contains(2), false)
    })
})
