import { checkPowersOfThree } from './check-if-number-is-a-sum-of-powers-of-three.js'
import assert from 'assert'

describe('checkPowersOfThree()', () => {
    let tests = [
        { args: 12, expected: true },
        { args: 91, expected: true },
        { args: 21, expected: false },
    ]

    tests.forEach((test) => {
        it(`checkPowersOfThree(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(checkPowersOfThree(test.args), test.expected)
        })
    })
})
