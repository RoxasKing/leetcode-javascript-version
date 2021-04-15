import { longestDecomposition } from './longest-chunked-palindrome-decomposition.js'
import assert from 'assert'

describe('longestDecomposition()', () => {
    let tests = [
        { args: 'ghiabcdefhelloadamhelloabcdefghi', expected: 7 },
        { args: 'merchant', expected: 1 },
        { args: 'antaprezatepzapreanta', expected: 11 },
        { args: 'aaa', expected: 3 },
    ]

    tests.forEach((test) => {
        it(`longestDecomposition(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(longestDecomposition(test.args), test.expected)
        })
    })
})
