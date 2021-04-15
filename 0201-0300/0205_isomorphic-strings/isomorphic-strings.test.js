import { isIsomorphic, isIsomorphic2 } from './isomorphic-strings.js'
import assert from 'assert'

describe('isIsomorphic()', () => {
    let tests = [
        { args: ['egg', 'add'], expected: true },
        { args: ['foo', 'bar'], expected: false },
        { args: ['paper', 'title'], expected: true },
        { args: ['ab', 'aa'], expected: false },
        { args: ['ab', 'ca'], expected: true },
    ]

    tests.forEach((test) => {
        it(`isIsomorphic(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(isIsomorphic(...test.args), test.expected)
        })
    })
})

describe('isIsomorphic2()', () => {
    let tests = [
        { args: ['egg', 'add'], expected: true },
        { args: ['foo', 'bar'], expected: false },
        { args: ['paper', 'title'], expected: true },
        { args: ['ab', 'aa'], expected: false },
        { args: ['ab', 'ca'], expected: true },
    ]

    tests.forEach((test) => {
        it(`isIsomorphic2(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(isIsomorphic2(...test.args), test.expected)
        })
    })
})
