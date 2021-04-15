import { pivotIndex } from './find-pivot-index.js'
import assert from 'assert'

describe('pivotIndex()', () => {
    let tests = [
        { args: [1, 7, 3, 6, 5, 6], expected: 3 },
        { args: [1, 2, 3], expected: -1 },
        { args: [], expected: -1 },
        { args: [-1, -1, 0, 0, -1, -1], expected: 2 },
    ]

    tests.forEach((test) => {
        it(`pivotIndex(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(pivotIndex(test.args), test.expected)
        })
    })
})
