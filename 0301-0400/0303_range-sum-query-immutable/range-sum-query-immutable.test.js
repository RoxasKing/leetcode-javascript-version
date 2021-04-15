import { NumArray } from './range-sum-query-immutable.js'
import assert from 'assert'

describe('NumArray()', () => {
    let na = new NumArray([-2, 0, 3, -5, 2, -1])

    it(`na.sumRange(0, 2) === 1`, () => {
        assert.deepStrictEqual(na.sumRange(0, 2), 1)
    })

    it(`na.sumRange(2, 5) === -1`, () => {
        assert.deepStrictEqual(na.sumRange(2, 5), -1)
    })

    it(`na.sumRange(0, 5) === -3`, () => {
        assert.deepStrictEqual(na.sumRange(0, 5), -3)
    })
})
