import { leastOpsExpressTarget } from './least-operators-to-express-number.js'
import assert from 'assert'

describe('leastOpsExpressTarget()', () => {
    let tests = [
        { args: { x: 3, target: 19 }, expected: 5 },
        { args: { x: 5, target: 501 }, expected: 8 },
        { args: { x: 100, target: 100000000 }, expected: 3 },
    ]

    tests.forEach((test) => {
        let x = test.args.x, target = test.args.target
        it(`leastOpsExpressTarget(${x}, ${target}) === ${test.expected}`, () => {
            assert.deepStrictEqual(leastOpsExpressTarget(x, target), test.expected)
        })
    })
})
