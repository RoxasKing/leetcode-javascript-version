import { numPermsDISequence } from './valid-permutations-for-di-sequence.js'
import assert from 'assert'

describe('numPermsDISequence()', () => {
    let tests = [
        { args: 'DID', expected: 5 },
        { args: 'DIDIDI', expected: 272 },
    ]

    tests.forEach((test) => {
        it(`numPermsDISequence(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(numPermsDISequence(test.args), test.expected)
        })
    })
})
