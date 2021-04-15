import { summaryRanges } from './summary-ranges.js'
import assert from 'assert'

describe('summaryRanges()', () => {
    let tests = [
        { args: [0, 1, 2, 4, 5, 7], expected: ["0->2", "4->5", "7"] },
        { args: [0, 2, 3, 4, 6, 8, 9], expected: ["0", "2->4", "6", "8->9"] },
        { args: [], expected: [] },
        { args: [-1], expected: ['-1'] },
        { args: [0], expected: ['0'] },
        { args: [0, 1, 2, 3, 4, 5, 7], expected: ["0->5", "7"] },
    ]

    tests.forEach((test) => {
        it(`summaryRanges(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(summaryRanges(test.args), test.expected)
        })
    })
})
