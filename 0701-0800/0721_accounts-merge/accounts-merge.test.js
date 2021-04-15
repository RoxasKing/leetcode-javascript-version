import { accountsMerge } from './accounts-merge.js'
import assert from 'assert'

describe('accountsMerge()', () => {
    let tests = [
        {
            args: [
                ["John", "johnsmith@mail.com", "john00@mail.com"],
                ["John", "johnnybravo@mail.com"],
                ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
                ["Mary", "mary@mail.com"]
            ],
            expected: [
                ["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
                ["John", "johnnybravo@mail.com"],
                ["Mary", "mary@mail.com"]
            ]
        },
    ]

    tests.forEach((test) => {
        it(`accountsMerge(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(accountsMerge(test.args), test.expected)
        })
    })
})
