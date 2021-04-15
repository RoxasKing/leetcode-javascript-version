import { gridIllumination } from './grid-illumination.js'
import assert from 'assert'

describe('gridIllumination()', () => {
    let tests = [
        { args: { N: 5, lamps: [[0, 0], [4, 4]], queries: [[1, 1], [1, 0]] }, expected: [1, 0] },
        { args: { N: 5, lamps: [[0, 0], [4, 4]], queries: [[1, 1], [1, 1]] }, expected: [1, 1] },
        { args: { N: 5, lamps: [[0, 0], [0, 4]], queries: [[0, 4], [0, 1], [1, 4]] }, expected: [1, 1, 0] },
    ]

    tests.forEach((test) => {
        let args = test.args
        let N = args.N, lamps = args.lamps, queries = args.queries
        it(`gridIllumination(${N}, [${lamps}], [${queries}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(gridIllumination(N, lamps, queries), test.expected)
        })
    })
})
