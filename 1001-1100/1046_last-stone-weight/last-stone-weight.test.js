import { lastStoneWeight } from './last-stone-weight.js'
import assert from 'assert'

describe('lastStoneWeight()', () => {
    let tests = [
        { args: [2, 7, 4, 1, 8, 1], expected: 1 },
        { args: [8, 8, 2, 1, 4, 10, 8, 3], expected: 0 },
    ]

    tests.forEach((test) => {
        it(`lastStoneWeight(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(lastStoneWeight(test.args), test.expected)
        })
    })
})
