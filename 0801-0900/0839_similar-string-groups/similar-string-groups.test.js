import { numSimilarGroups } from './similar-string-groups.js'
import assert from 'assert'

describe('numSimilarGroups()', () => {
    let tests = [
        { args: ["tars", "rats", "arts", "star"], expected: 2 },
        { args: ["omv", "ovm"], expected: 1 },
        { args: ["abc", "abc"], expected: 1 },
    ]

    tests.forEach((test) => {
        it(`numSimilarGroups(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(numSimilarGroups(test.args), test.expected)
        })
    })
})
