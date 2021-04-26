import { largestDivisibleSubset } from './largest-divisible-subset.js'
import assert from 'assert'

describe('largestDivisibleSubset()', () => {
    let tests = [
        { args: [1, 2, 3], expected: [1, 2] },
        { args: [1, 2, 4, 8], expected: [1, 2, 4, 8] },
        { args: [5, 9, 18, 54, 108, 540, 90, 180, 360, 720], expected: [9, 18, 90, 180, 360, 720] },
    ]

    tests.forEach((test) => {
        it(`largestDivisibleSubset(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(largestDivisibleSubset(test.args), test.expected)
        })
    })
})
