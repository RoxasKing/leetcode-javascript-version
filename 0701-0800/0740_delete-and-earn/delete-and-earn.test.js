import { deleteAndEarn } from './delete-and-earn.js'
import assert from 'assert'

describe('deleteAndEarn()', () => {
    let tests = [
        { args: [3, 4, 2], expected: 6 },
        { args: [2, 2, 3, 3, 3, 4], expected: 9 },
    ]

    tests.forEach((test) => {
        it(`deleteAndEarn(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(deleteAndEarn(test.args), test.expected)
        })
    })
})
