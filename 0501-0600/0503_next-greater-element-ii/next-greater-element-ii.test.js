import { nextGreaterElements } from './next-greater-element-ii.js'
import assert from 'assert'

describe('nextGreaterElements()', () => {
    let tests = [
        { args: [1, 2, 1], expected: [2, -1, 2] },
    ]

    tests.forEach((test) => {
        it(`nextGreaterElements(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(nextGreaterElements(test.args), test.expected)
        })
    })
})
