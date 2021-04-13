import { subsetsWithDup } from './subsets-ii.js'
import assert from 'assert'

describe('subsetsWithDup()', () => {
    let tests = [
        {
            args: [1, 2, 2],
            expected: [[], [1], [2], [1, 2], [2, 2], [1, 2, 2]]
        },
        {
            args: [0],
            expected: [[], [0]]
        },
        {
            args: [4, 4, 4, 1, 4],
            expected: [
                [],
                [1],
                [4],
                [1, 4],
                [4, 4],
                [1, 4, 4],
                [4, 4, 4],
                [1, 4, 4, 4],
                [4, 4, 4, 4],
                [1, 4, 4, 4, 4]
            ]
        },
    ]

    tests.forEach((test) => {
        it(`subsetsWithDup(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(subsetsWithDup(test.args), test.expected)
        })
    })
})
