import { isValidSerialization } from './verify-preorder-serialization-of-a-binary-tree.js'
import assert from 'assert'

describe('isValidSerialization()', () => {
    let tests = [
        { args: '9,3,4,#,#,1,#,#,2,#,6,#,#', expected: true },
        { args: '1,#', expected: false },
        { args: '9,#,#,1', expected: false },
        { args: '1,#,#', expected: true },
        { args: '1,2,#,#,#', expected: true },
        { args: '1,2,3,#,#,#,#', expected: true },
    ]

    tests.forEach((test) => {
        it(`isValidSerialization(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(isValidSerialization(test.args), test.expected)
        })
    })
})
