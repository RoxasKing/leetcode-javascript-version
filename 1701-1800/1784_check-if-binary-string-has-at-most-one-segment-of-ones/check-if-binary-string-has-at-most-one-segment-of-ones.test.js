import { checkOnesSegment } from './check-if-binary-string-has-at-most-one-segment-of-ones.js'
import assert from 'assert'

describe('checkOnesSegment()', () => {
    let tests = [
        { args: "1001", expected: false },
        { args: "110", expected: true },
        { args: "1", expected: true },
    ]

    tests.forEach((test) => {
        it(`checkOnesSegment(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(checkOnesSegment(test.args), test.expected)
        })
    })
})
