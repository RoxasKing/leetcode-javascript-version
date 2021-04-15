import { findContentChildren } from './assign-cookies.js'
import assert from 'assert'

describe('findContentChildren()', () => {
    let tests = [
        { args: [[1, 2, 3], [1, 1]], expected: 1 },
        { args: [[1, 2], [1, 2, 3]], expected: 2 },
    ]

    tests.forEach((test) => {
        it(`findContentChildren([${test.args[0]}], [${test.args[1]}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(findContentChildren(...test.args), test.expected)
        })
    })
})
