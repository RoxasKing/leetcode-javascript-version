import { maximumProduct } from './maximum-product-of-three-numbers.js'
import assert from 'assert'

describe('maximumProduct()', () => {
    let tests = [
        { args: [1, 2, 3], expected: 6 },
        { args: [1, 2, 3, 4], expected: 24 },
        { args: [-1, -2, -3], expected: -6 },
    ]

    tests.forEach((test) => {
        it(`maximumProduct(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(maximumProduct(test.args), test.expected)
        })
    })
})
