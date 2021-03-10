import { maxEnvelopes } from './russian-doll-envelopes.js'
import assert from 'assert'

describe('maxEnvelopes()', () => {
    let tests = [
        { args: [[5, 4], [6, 4], [6, 7], [2, 3]], expected: 3 },
        { args: [[12, 2], [3, 4], [13, 3], [4, 5], [5, 6], [14, 4], [15, 5]], expected: 4 },
    ]

    tests.forEach((test) => {
        it(`maxEnvelopes(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(maxEnvelopes(test.args), test.expected)
        })
    })
})
