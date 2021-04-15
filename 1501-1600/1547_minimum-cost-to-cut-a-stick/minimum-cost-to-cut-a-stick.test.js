import { minCost } from './minimum-cost-to-cut-a-stick.js'
import assert from 'assert'

describe('minCost()', () => {
    let tests = [
        { args: { n: 7, cuts: [1, 3, 4, 5] }, expected: 16 },
        { args: { n: 9, cuts: [5, 6, 1, 4, 2] }, expected: 22 },
        { args: { n: 5340, cuts: [2062, 4550, 482, 4903, 2998, 5002, 3766, 2297] }, expected: 16121 },
    ]

    tests.forEach((test) => {
        let n = test.args.n, cuts = test.args.cuts
        it(`minCost(${n}, [${cuts}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(minCost(n, cuts), test.expected)
        })
    })
})
