import { largeGroupPositions } from "./positions-of-large-groups.js"
import assert from 'assert'

describe('largeGroupPositions()', () => {
    let tests = [
        { args: 'abbxxxxzzy', expected: [[3, 6]] },
        { args: 'abc', expected: [] },
        { args: 'abcdddeeeeaabbbcd', expected: [[3, 5], [6, 9], [12, 14]] },
        { args: 'aba', expected: [] },
    ]

    tests.forEach((test) => {
        it(`largeGroupPositions(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(largeGroupPositions(test.args), test.expected)
        })
    })
})
