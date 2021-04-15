import { KthLargest } from './kth-largest-element-in-a-stream.js'
import assert from 'assert'

describe('KthLargest()', () => {
    let kl = new KthLargest(3, [4, 5, 8, 2])
    let tests = [
        { args: 3, expected: 4 },
        { args: 5, expected: 5 },
        { args: 10, expected: 5 },
        { args: 9, expected: 8 },
        { args: 4, expected: 8 },
    ]

    tests.forEach((test) => {
        it(`kl.add(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(kl.add(test.args), test.expected)
        })
    })
})
