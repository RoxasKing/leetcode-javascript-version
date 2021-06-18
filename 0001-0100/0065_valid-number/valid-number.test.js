import { isNumber } from './valid-number.js'
import assert from 'assert'

describe('isNumber()', () => {
	let tests = [
		{ args: '0', expected: true },
		{ args: 'e', expected: false },
		{ args: '.', expected: false },
		{ args: '.1', expected: true },
	]

	tests.forEach((test) => {
		it(`isNumber(${test.args}) === ${test.expected}`, () => {
			assert.deepStrictEqual(isNumber(test.args), test.expected)
		})
	})
})
