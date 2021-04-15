import { nearestValidPoint } from './find-nearest-point-that-has-the-same-x-or-y-coordinate.js'
import assert from 'assert'

describe('nearestValidPoint()', () => {
    let tests = [
        { args: { x: 3, y: 4, points: [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]] }, expected: 2 },
        { args: { x: 3, y: 4, points: [[3, 4]] }, expected: 0 },
        { args: { x: 3, y: 4, points: [[2, 3]] }, expected: -1 },
    ]

    tests.forEach((test) => {
        let x = test.args.x, y = test.args.y, points = test.args.points
        it(`nearestValidPoint(${x}, ${y}, [${points}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(nearestValidPoint(x, y, points), test.expected)
        })
    })
})
