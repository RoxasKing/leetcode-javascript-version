import { makeConnected } from './number-of-operations-to-make-network-connected.js'
import assert from 'assert'

describe('makeConnected()', () => {
    let tests = [
        { args: { n: 4, connections: [[0, 1], [0, 2], [1, 2]] }, expected: 1 },
        { args: { n: 6, connections: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]] }, expected: 2 },
        { args: { n: 6, connections: [[0, 1], [0, 2], [0, 3], [1, 2]] }, expected: -1 },
        { args: { n: 5, connections: [[0, 1], [0, 2], [3, 4], [2, 3]] }, expected: 0 },
    ]

    tests.forEach((test) => {
        let n = test.args.n, connections = test.args.connections
        it(`makeConnected(${n}, [${connections}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(makeConnected(n, connections), test.expected)
        })
    })
})
