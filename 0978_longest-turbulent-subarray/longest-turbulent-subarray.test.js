import { maxTurbulenceSize } from './longest-turbulent-subarray.js'
import assert from 'assert'

describe('maxTurbulenceSize()', () => {
    let tests = [
        { args: [9, 4, 2, 10, 7, 8, 8, 1, 9], expected: 5 },
        { args: [4, 8, 12, 16], expected: 2 },
        { args: [100], expected: 1 },
    ]

    tests.forEach((test) => {
        it(`maxTurbulenceSize(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(maxTurbulenceSize(test.args), test.expected)
        })
    })
})
