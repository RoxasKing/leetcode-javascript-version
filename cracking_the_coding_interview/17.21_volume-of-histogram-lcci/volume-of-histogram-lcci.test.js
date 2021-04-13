import { trap } from './volume-of-histogram-lcci.js'
import assert from 'assert'

describe('trap()', () => {
    let tests = [
        { args: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expected: 6 },
    ]

    tests.forEach((test) => {
        it(`trap(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(trap(test.args), test.expected)
        })
    })
})
