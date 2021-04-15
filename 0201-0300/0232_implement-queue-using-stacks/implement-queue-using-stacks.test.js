import { MyQueue } from './implement-queue-using-stacks.js'
import assert from 'assert'

describe('MyQueue()', () => {
    let mq = new MyQueue()
    mq.push(1)
    mq.push(2)

    it(`mq.peek() === 1`, () => {
        assert.deepStrictEqual(mq.peek(), 1)
    })

    it(`mq.pop() === 1`, () => {
        assert.deepStrictEqual(mq.pop(), 1)
    })

    it(`mq.empty() === false`, () => {
        assert.deepStrictEqual(mq.empty(), false)
    })
})
