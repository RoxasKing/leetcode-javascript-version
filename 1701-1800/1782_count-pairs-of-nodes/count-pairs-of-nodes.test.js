import { countPairs } from './count-pairs-of-nodes.js'
import assert from 'assert'

describe('countPairs()', () => {
    let tests = [
        {
            args: {
                n: 4,
                edges: [[1, 2], [2, 4], [1, 3], [2, 3], [2, 1]],
                queries: [2, 3]
            },
            expected: [6, 5]
        },
        {
            args: {
                n: 5,
                edges: [[1, 5], [1, 5], [3, 4], [2, 5], [1, 3], [5, 1], [2, 3], [2, 5]],
                queries: [1, 2, 3, 4, 5]
            },
            expected: [10, 10, 9, 8, 6]
        },
    ]

    tests.forEach((test) => {
        let n = test.args.n, edges = test.args.edges, queries = test.args.queries
        it(`countPairs(${n}, [${edges}], [${queries}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(countPairs(n, edges, queries), test.expected)
        })
    })
})
