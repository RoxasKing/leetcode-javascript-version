import { maxScore } from './maximum-points-you-can-obtain-from-cards.js'
import assert from 'assert'

describe('maxScore()', () => {
    let tests = [
        { args: { cardPoints: [1, 2, 3, 4, 5, 6, 1], k: 3 }, expected: 12 },
        { args: { cardPoints: [2, 2, 2], k: 2 }, expected: 4 },
        { args: { cardPoints: [9, 7, 7, 9, 7, 7, 9], k: 7 }, expected: 55 },
        { args: { cardPoints: [1, 1000, 1], k: 1 }, expected: 1 },
        { args: { cardPoints: [1, 79, 80, 1, 1, 1, 200, 1], k: 3 }, expected: 202 },
    ]

    tests.forEach((test) => {
        let cardPoints = test.args.cardPoints, k = test.args.k
        it(`maxScore([${cardPoints}], ${k}) === ${test.expected}`, () => {
            assert.deepStrictEqual(maxScore(cardPoints, k), test.expected)
        })
    })
})
