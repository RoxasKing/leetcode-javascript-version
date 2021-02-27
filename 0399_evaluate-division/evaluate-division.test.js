import { calcEquation } from './evaluate-division.js'
import assert from 'assert'

describe('calcEquation()', () => {
    let tests = [
        {
            args: [
                [["a", "b"], ["b", "c"]],
                [2.0, 3.0],
                [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]
            ],
            expected: [6.00000, 0.50000, -1.00000, 1.00000, -1.00000]
        },
        {
            args: [
                [["a", "b"], ["b", "c"], ["bc", "cd"]],
                [1.5, 2.5, 5.0],
                [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]]
            ],
            expected: [3.75000, 0.40000, 5.00000, 0.20000]
        },
        {
            args: [
                [["a", "b"]],
                [0.5],
                [["a", "b"], ["b", "a"], ["a", "c"], ["x", "y"]]
            ],
            expected: [0.50000, 2.00000, -1.00000, -1.00000]
        },
    ]

    tests.forEach((test) => {
        it(`calcEquation(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(calcEquation(...test.args), test.expected)
        })
    })
})
