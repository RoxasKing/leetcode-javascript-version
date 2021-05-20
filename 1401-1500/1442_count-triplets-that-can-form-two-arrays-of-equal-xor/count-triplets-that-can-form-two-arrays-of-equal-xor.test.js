import { countTriplets } from './count-triplets-that-can-form-two-arrays-of-equal-xor.js'
import assert from 'assert'

describe('countTriplets()', () => {
    let tests = [
        { args: [2, 3, 1, 6, 7], expected: 4 },
        { args: [1, 1, 1, 1, 1], expected: 10 },
        { args: [2, 3], expected: 0 },
        { args: [1, 3, 5, 7, 9], expected: 3 },
        { args: [7, 11, 12, 9, 5, 2, 7, 17, 22], expected: 8 },
    ]

    tests.forEach((test) => {
        it(`countTriplets(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(countTriplets(test.args), test.expected)
        })
    })
})
