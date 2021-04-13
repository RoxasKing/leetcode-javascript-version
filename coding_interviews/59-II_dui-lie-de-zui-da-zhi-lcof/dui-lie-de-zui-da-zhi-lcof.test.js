import { MaxQueue } from './dui-lie-de-zui-da-zhi-lcof.js'
import assert from 'assert'

describe('MaxQueue()', () => {
    let mq = new MaxQueue()
    mq.push_back(1)
    mq.push_back(2)

    it(`mq.max_value() === 2`, () => {
        assert.deepStrictEqual(mq.max_value(), 2)
    })

    it(`mq.pop_front() === 1`, () => {
        assert.deepStrictEqual(mq.pop_front(), 1)
    })

    it(`mq.max_value() === 2`, () => {
        assert.deepStrictEqual(mq.max_value(), 2)
    })
})
