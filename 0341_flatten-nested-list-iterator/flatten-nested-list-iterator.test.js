import { NestedIterator, NestedInteger } from './flatten-nested-list-iterator.js'
import assert from 'assert'

describe('NestedIterator()', () => {
    let a = new NestedInteger()
    let b = new NestedInteger()
    let c = new NestedInteger()
    let d = new NestedInteger()
    let e = new NestedInteger()
    a.setInteger(1)
    b.setInteger(1)
    c.setInteger(2)
    d.setInteger(1)
    e.setInteger(1)
    let list1 = new NestedInteger()
    list1.add(a)
    list1.add(b)
    let list2 = new NestedInteger()
    list2.add(d)
    list2.add(e)
    let ni = new NestedIterator([list1, c, list2])
    let out = []
    while (ni.hasNext()) { out.push(ni.next()) }

    it(`NestedIterator([[${list1}], ${c}, [${list2}]]) === [1,1,2,1,1]`, () => {
        assert.deepStrictEqual(out, [1, 1, 2, 1, 1])
    })
})
