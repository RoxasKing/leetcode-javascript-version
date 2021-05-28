import { hammingDistance } from './hamming-distance.js'
import assert from 'assert'

describe('hammingDistance()', () => {
    let tests = [
        { args: { x: 1, y: 4 }, expected: 2 },
        { args: { x: 3, y: 1 }, expected: 1 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let x = args.x, y = args.y
        it(`hammingDistance(${x}, ${y}) === ${test.expected}`, () => {
            assert.deepStrictEqual(hammingDistance(x, y), test.expected)
        })
    })
})
