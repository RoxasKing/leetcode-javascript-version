import { xorGame } from './chalkboard-xor-game.js'
import assert from 'assert'

describe('xorGame()', () => {
    let tests = [
        { args: [1, 1, 2], expected: false },
        { args: [1, 2, 3], expected: true },
    ]

    tests.forEach((test) => {
        it(`xorGame(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(xorGame(test.args), test.expected)
        })
    })
})
