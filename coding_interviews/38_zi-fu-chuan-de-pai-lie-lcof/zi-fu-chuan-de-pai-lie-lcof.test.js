import { permutation } from './zi-fu-chuan-de-pai-lie-lcof.js'
import assert from 'assert'

describe('permutation()', () => {
	let tests = [
		{ args: 'abc', expected: ['abc', 'acb', 'bac', 'bca', 'cba', 'cab'] },
	]

	tests.forEach((test) => {
		it(`permutation(${test.args}) === ${test.expected}`, () => {
			assert.deepStrictEqual(permutation(test.args), test.expected)
		})
	})
})
