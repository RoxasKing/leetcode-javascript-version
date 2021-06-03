import { canEat } from './can-you-eat-your-favorite-candy-on-your-favorite-day.js'
import assert from 'assert'

describe('canEat()', () => {
    let tests = [
        {
            args: {
                candiesCount: [7, 4, 5, 3, 8],
                queries: [[0, 2, 2], [4, 2, 4], [2, 13, 1000000000]]
            },
            expected: [true, false, true],
        },
        {
            args: {
                candiesCount: [5, 2, 6, 4, 1],
                queries: [[3, 1, 2], [4, 10, 3], [3, 10, 100], [4, 100, 30], [1, 3, 1]]
            },
            expected: [false, true, true, false, false],
        },
    ]

    tests.forEach((test) => {
        let args = test.args
        let candiesCount = args.candiesCount, queries = args.queries
        it(`canEat([${candiesCount}], [${queries}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(canEat(candiesCount, queries), test.expected)
        })
    })
})
