import { guessNumber } from './guess-number-higher-or-lower.js'
import assert from 'assert'

describe('guessNumber()', () => {
	let tests = [
		{ args: 10, expected: 6 },
		{ args: 1, expected: 1 },
		{ args: 2, expected: 1 },
		{ args: 2, expected: 2 },
	]

	tests.forEach((test) => {
		it(`guessNumber(${test.args}) === ${test.expected}`, () => {
			PICKED = test.expected
			assert.deepStrictEqual(guessNumber(test.args), test.expected)
		})
	})
})

/**
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
						 1 if num is higher than the guess number
						 otherwise return 0
 */
var guess = function (num) {
	if (num < PICKED) { return 1 }
	else if (num > PICKED) { return -1 }
	else { return 0 }
}

let PICKED = -1 << 31

export { guess }
