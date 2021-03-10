import { countRestrictedPaths } from './number-of-restricted-paths-from-first-to-last-node.js'
import assert from 'assert'

describe('countRestrictedPaths()', () => {
    let tests = [
        {
            args: {
                n: 5,
                edges: [[1, 2, 3], [1, 3, 3], [2, 3, 1], [1, 4, 2], [5, 2, 2], [3, 5, 1], [5, 4, 10]],
            },
            expected: 3
        },
        {
            args: {
                n: 7,
                edges: [[1, 3, 1], [4, 1, 2], [7, 3, 4], [2, 5, 3], [5, 6, 1], [6, 7, 2], [7, 5, 3], [2, 6, 4]],
            },
            expected: 1
        },
    ]

    tests.forEach((test) => {
        let n = test.args.n, edges = test.args.edges
        it(`countRestrictedPaths(${n}, [${edges}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(countRestrictedPaths(n, edges), test.expected)
        })
    })
})
