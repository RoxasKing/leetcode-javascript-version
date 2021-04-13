import { matrixBlockSum } from './matrix-block-sum.js'
import assert from 'assert'

describe('matrixBlockSum()', () => {
    let tests = [
        {
            args: {
                mat: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
                K: 1
            },
            expected: [[12, 21, 16], [27, 45, 33], [24, 39, 28]]
        },
        {
            args: {
                mat: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
                K: 2
            },
            expected: [[45, 45, 45], [45, 45, 45], [45, 45, 45]]
        },
    ]

    tests.forEach((test) => {
        let mat = test.args.mat, K = test.args.K
        it(`matrixBlockSum([${mat}], ${K}) === ${test.expected}`, () => {
            assert.deepStrictEqual(matrixBlockSum(mat, K), test.expected)
        })
    })
})
