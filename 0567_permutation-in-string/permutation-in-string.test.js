import { checkInclusion } from './permutation-in-string.js'
import assert from 'assert'

describe('checkInclusion()', () => {
    let tests = [
        { args: { s1: 'ab', s2: 'eidbaooo' }, expected: true },
        { args: { s1: 'ab', s2: 'eidboaoo' }, expected: false },
    ]

    tests.forEach((test) => {
        let s1 = test.args.s1, s2 = test.args.s2
        it(`checkInclusion(${s1}, ${s2}) === ${test.expected}`, () => {
            assert.deepStrictEqual(checkInclusion(s1, s2), test.expected)
        })
    })
})
