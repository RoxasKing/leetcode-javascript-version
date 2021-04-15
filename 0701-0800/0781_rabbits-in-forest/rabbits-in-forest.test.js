import { numRabbits } from './rabbits-in-forest.js'
import assert from 'assert'

describe('numRabbits()', () => {
    let tests = [
        { args: [1, 1, 2], expected: 5 },
        { args: [10, 10, 10], expected: 11 },
        { args: [], expected: 0 },
    ]

    tests.forEach((test) => {
        it(`numRabbits(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(numRabbits(test.args), test.expected)
        })
    })
})
