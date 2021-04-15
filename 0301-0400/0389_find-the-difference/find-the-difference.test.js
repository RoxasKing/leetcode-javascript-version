import { findTheDifference } from './find-the-difference.js'
import assert from 'assert'

describe('findTheDifference()', () => {
    let tests = [
        { args: ['abcd', 'abcde'], expected: 'e' },
        { args: ['', 'y'], expected: 'y' },
        { args: ['a', 'aa'], expected: 'a' },
        { args: ['ae', 'aea'], expected: 'a' },
    ]

    tests.forEach((test) => {
        it(`findTheDifference(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(findTheDifference(...test.args), test.expected)
        })
    })
})
