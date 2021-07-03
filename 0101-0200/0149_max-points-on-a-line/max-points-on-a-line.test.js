import { maxPoints } from './max-points-on-a-line.js'
import assert from 'assert'

describe('maxPoints()', () => {
	let tests = [
		{ args: [[1, 1], [2, 2], [3, 3]], expected: 3 },
		{ args: [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]], expected: 4 },
	]

	tests.forEach((test) => {
		it(`maxPoints(${test.args}) === ${test.expected}`, () => {
			assert.deepStrictEqual(maxPoints(test.args), test.expected)
		})
	})
})
