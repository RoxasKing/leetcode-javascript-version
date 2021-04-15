import { canCross } from './frog-jump.js'
import assert from 'assert'

describe('canCross()', () => {
    let tests = [
        { args: [0, 1, 3, 5, 6, 8, 12, 17], expected: true },
        { args: [0, 1, 2, 3, 4, 8, 9, 11], expected: false },
        { args: [0, 2], expected: false },
    ]

    tests.forEach((test) => {
        it(`canCross(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(canCross(test.args), test.expected)
        })
    })
})
