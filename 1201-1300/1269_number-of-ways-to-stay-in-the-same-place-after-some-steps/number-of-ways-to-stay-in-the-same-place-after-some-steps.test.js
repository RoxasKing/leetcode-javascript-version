import { numWays } from './number-of-ways-to-stay-in-the-same-place-after-some-steps.js'
import assert from 'assert'

describe('numWays()', () => {
    let tests = [
        { args: { steps: 3, arrLen: 2 }, expected: 4 },
        { args: { steps: 2, arrLen: 4 }, expected: 2 },
        { args: { steps: 4, arrLen: 2 }, expected: 8 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let steps = args.steps, arrLen = args.arrLen
        it(`numWays(${steps}, ${arrLen}) === ${test.expected}`, () => {
            assert.deepStrictEqual(numWays(steps, arrLen), test.expected)
        })
    })
})
