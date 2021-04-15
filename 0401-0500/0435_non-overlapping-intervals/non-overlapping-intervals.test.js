import { eraseOverlapIntervals } from './non-overlapping-intervals.js'
import assert from 'assert'

describe('eraseOverlapIntervals()', () => {
    let tests = [
        { args: [[1, 2], [2, 3], [3, 4], [1, 3]], expected: 1 },
        { args: [[1, 2], [1, 2], [1, 2]], expected: 2 },
        { args: [[1, 2], [2, 3]], expected: 0 },
        { args: [], expected: 0 },
    ]

    tests.forEach((test) => {
        it(`eraseOverlapIntervals(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(eraseOverlapIntervals(test.args), test.expected)
        })
    })
})
