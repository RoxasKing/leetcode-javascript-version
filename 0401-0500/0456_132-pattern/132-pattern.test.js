import { find132pattern } from './132-pattern.js'
import assert from 'assert'

describe('find132pattern()', () => {
    let tests = [
        { args: [1, 2, 3, 4], expected: false },
        { args: [3, 1, 4, 2], expected: true },
        { args: [-1, 3, 2, 0], expected: true },
    ]

    tests.forEach((test) => {
        it(`find132pattern(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(find132pattern(test.args), test.expected)
        })
    })
})
