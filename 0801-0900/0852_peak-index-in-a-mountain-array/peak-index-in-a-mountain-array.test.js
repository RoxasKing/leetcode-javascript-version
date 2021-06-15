import { peakIndexInMountainArray } from './peak-index-in-a-mountain-array.js'
import assert from 'assert'

describe('peakIndexInMountainArray()', () => {
	let tests = [
		{ args: [0, 1, 0], expected: 1 },
		{ args: [0, 2, 1, 0], expected: 1 },
		{ args: [0, 10, 5, 2], expected: 1 },
		{ args: [3, 4, 5, 1], expected: 2 },
		{ args: [24, 69, 100, 99, 79, 78, 67, 36, 26, 19], expected: 2 },
	]

	tests.forEach((test) => {
		it(`peakIndexInMountainArray(${test.args}) === ${test.expected}`, () => {
			assert.deepStrictEqual(peakIndexInMountainArray(test.args), test.expected)
		})
	})
})
