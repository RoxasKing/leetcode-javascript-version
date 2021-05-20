import { topKFrequent } from './top-k-frequent-words.js'
import assert from 'assert'

describe('topKFrequent()', () => {
    let tests = [
        {
            args: {
                words: ["i", "love", "leetcode", "i", "love", "coding"],
                k: 2
            },
            expected: ["i", "love"]
        },
        {
            args: {
                words: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
                k: 4
            },
            expected: ["the", "is", "sunny", "day"]
        },
    ]

    tests.forEach((test) => {
        let args = test.args
        let words = args.words, k = args.k
        it(`topKFrequent([${words}], ${k}) === ${test.expected}`, () => {
            assert.deepStrictEqual(topKFrequent(words, k), test.expected)
        })
    })
})
