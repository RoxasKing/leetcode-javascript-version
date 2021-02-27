import { findNumOfValidWords } from './number-of-valid-words-for-each-puzzle.js'
import assert from 'assert'

describe('findNumOfValidWords()', () => {
    let tests = [
        {
            args: {
                words: ["aaaa", "asas", "able", "ability", "actt", "actor", "access"],
                puzzles: ["aboveyz", "abrodyz", "abslute", "absoryz", "actresz", "gaswxyz"]
            },
            expected: [1, 1, 3, 2, 4, 0]
        },
    ]

    tests.forEach((test) => {
        let words = test.args.words, puzzles = test.args.puzzles
        it(`findNumOfValidWords([${words}], [${puzzles}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(findNumOfValidWords(words, puzzles), test.expected)
        })
    })
})
