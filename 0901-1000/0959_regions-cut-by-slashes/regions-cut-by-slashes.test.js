import { regionsBySlashes } from './regions-cut-by-slashes.js'
import assert from 'assert'

describe('regionsBySlashes()', () => {
    let tests = [
        { args: [' /', '/ '], expected: 2 },
        { args: [' /', '  '], expected: 1 },
        { args: ['\\/', '/\\'], expected: 4 },
        { args: ['/\\', '\\/'], expected: 5 },
        { args: ['//', '/ '], expected: 3 },
    ]

    tests.forEach((test) => {
        it(`regionsBySlashes(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(regionsBySlashes(test.args), test.expected)
        })
    })
})
