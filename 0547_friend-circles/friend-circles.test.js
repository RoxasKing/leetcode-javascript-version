import { findCircleNum } from './friend-circles.js'
import assert from 'assert'

describe('findCircleNum()', () => {
    let tests = [
        { args: [[1, 1, 0], [1, 1, 0], [0, 0, 1]], expected: 2 },
        { args: [[1, 0, 0], [0, 1, 0], [0, 0, 1]], expected: 3 },
    ]

    tests.forEach((test) => {
        it(`findCircleNum(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(findCircleNum(test.args), test.expected)
        })
    })
})
