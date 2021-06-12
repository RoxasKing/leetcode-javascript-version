import { numSquares } from './perfect-squares.js'
import assert from 'assert'

describe('numSquares()', () => {
	let tests = [
		{ args: 12, expected: 3 },
		{ args: 13, expected: 2 },
		{ args: 9999, expected: 4 },
	]

	tests.forEach((test) => {
		it(`numSquares(${test.args}) === ${test.expected}`, () => {
			assert.deepStrictEqual(numSquares(test.args), test.expected)
		})
	})
})
