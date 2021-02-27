import { candy } from './candy.js'
import assert from 'assert'

describe('candy()', () => {
    let tests = [
        { args: [1, 2, 87, 87, 87, 2, 1], expected: 13 },
        { args: [1, 3, 2, 2, 1], expected: 7 },
        { args: [1, 3, 2, 2, 2, 1], expected: 8 },
        { args: [1, 0, 2], expected: 5 },
        { args: [1, 2, 2], expected: 4 },
        { args: [1, 2, 1], expected: 4 },
        { args: [1, 4, 3, 3, 3, 1], expected: 8 },
        { args: [1, 4, 3, 2, 2, 1], expected: 10 },
        { args: [1, 2, 3, 4, 5, 3, 2, 1, 2, 6, 5, 4, 3, 3, 2, 1, 1, 3, 3, 3, 4, 2], expected: 47 },
    ]

    tests.forEach((test) => {
        it(`candy([${test.args}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(candy(test.args), test.expected)
        })
    })
})
