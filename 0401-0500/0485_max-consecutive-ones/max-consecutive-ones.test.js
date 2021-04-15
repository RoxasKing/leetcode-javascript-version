import { findMaxConsecutiveOnes } from './max-consecutive-ones.js'
import assert from 'assert'

describe('findMaxConsecutiveOnes()', () => {
    let tests = [
        { args: [1, 1, 0, 1, 1, 1], expected: 3 },
    ]

    tests.forEach((test) => {
        it(`findMaxConsecutiveOnes(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(findMaxConsecutiveOnes(test.args), test.expected)
        })
    })
})
