import { minimumEffortPath } from './path-with-minimum-effort.js'
import assert from 'assert'

describe('minimumEffortPath()', () => {
    let tests = [
        { args: [[1, 2, 2], [3, 8, 2], [5, 3, 5]], expected: 2 },
        { args: [[1, 2, 3], [3, 8, 4], [5, 3, 5]], expected: 1 },
        {
            args: [[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]],
            expected: 0
        },
    ]

    tests.forEach((test) => {
        it(`minimumEffortPath(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(minimumEffortPath(test.args), test.expected)
        })
    })
})
