import { canPlaceFlowers } from './can-place-flowers.js'
import assert from 'assert'

describe('canPlaceFlowers()', () => {
    let tests = [
        { args: [[1, 0, 0, 0, 1], 1], expected: true },
        { args: [[1, 0, 0, 0, 1], 2], expected: false },
        { args: [[1, 0, 0, 0, 1, 0, 0], 2], expected: true },
    ]

    tests.forEach((test) => {
        it(`canPlaceFlowers(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(canPlaceFlowers(...test.args), test.expected)
        })
    })
})
