import { frequencySort } from './sort-characters-by-frequency.js'
import assert from 'assert'

describe('frequencySort()', () => {
	let tests = [
		{ args: 'tree', expected: 'eert' },
		{ args: 'cccaaa', expected: 'aaaccc' },
		{ args: 'Aabb', expected: 'bbAa' },
	]

	tests.forEach((test) => {
		it(`frequencySort(${test.args}) === ${test.expected}`, () => {
			assert.deepStrictEqual(frequencySort(test.args), test.expected)
		})
	})
})
