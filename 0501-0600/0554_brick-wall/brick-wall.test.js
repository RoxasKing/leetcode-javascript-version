import { leastBricks } from './brick-wall.js'
import assert from 'assert'

describe('leastBricks()', () => {
    let tests = [
        { args: [[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]], expected: 2 },
        { args: [[1], [1], [1]], expected: 3 },
    ]

    tests.forEach((test) => {
        it(`leastBricks(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(leastBricks(test.args), test.expected)
        })
    })
})
