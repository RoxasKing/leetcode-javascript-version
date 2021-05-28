import { totalHammingDistance } from './total-hamming-distance.js'
import assert from 'assert'

describe('totalHammingDistance()', () => {
    let tests = [
        { args: [4, 14, 2], expected: 6 },
        { args: [4, 14, 4], expected: 4 },
    ]

    tests.forEach((test) => {
        it(`totalHammingDistance(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(totalHammingDistance(test.args), test.expected)
        })
    })
})
