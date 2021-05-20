import { kthLargestValue } from './find-kth-largest-xor-coordinate-value.js'
import assert from 'assert'

describe('kthLargestValue()', () => {
    let tests = [
        { args: { matrix: [[5, 2], [1, 6]], k: 1 }, expected: 7 },
        { args: { matrix: [[5, 2], [1, 6]], k: 2 }, expected: 5 },
        { args: { matrix: [[5, 2], [1, 6]], k: 3 }, expected: 4 },
        { args: { matrix: [[5, 2], [1, 6]], k: 4 }, expected: 0 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let matrix = args.matrix, k = args.k
        it(`kthLargestValue([${matrix}], ${k}) === ${test.expected}`, () => {
            assert.deepStrictEqual(kthLargestValue(matrix, k), test.expected)
        })
    })
})
