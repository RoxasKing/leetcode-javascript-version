import { lastStoneWeightII } from './last-stone-weight-ii.js'
import assert from 'assert'

describe('lastStoneWeightII()', () => {
    let tests = [
        { args: [2, 7, 4, 1, 8, 1], expected: 1 },
        { args: [31, 26, 33, 21, 40], expected: 5 },
        { args: [1, 2], expected: 1 },
    ]

    tests.forEach((test) => {
        it(`lastStoneWeightII(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(lastStoneWeightII(test.args), test.expected)
        })
    })
})
