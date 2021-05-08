import { minimumTimeRequired } from './find-minimum-time-to-finish-all-jobs.js'
import assert from 'assert'

describe('minimumTimeRequired()', () => {
    let tests = [
        { args: { jobs: [3, 2, 3], k: 3 }, expected: 3 },
        { args: { jobs: [1, 2, 4, 7, 8], k: 2 }, expected: 11 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let jobs = args.jobs, k = args.k
        it(`minimumTimeRequired([${jobs}], ${k}) === ${test.expected}`, () => {
            assert.deepStrictEqual(minimumTimeRequired(jobs, k), test.expected)
        })
    })
})
