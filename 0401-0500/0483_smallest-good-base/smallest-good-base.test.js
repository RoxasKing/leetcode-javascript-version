import { smallestGoodBase } from './smallest-good-base.js'
import assert from 'assert'

describe('smallestGoodBase()', () => {
	let tests = [
		{ args: '13', expected: '3' },
		{ args: '4681', expected: '8' },
		{ args: '1000000000000000000', expected: '999999999999999999' },
	]

	tests.forEach((test) => {
		it(`smallestGoodBase(${test.args}) === ${test.expected}`, () => {
			assert.deepStrictEqual(smallestGoodBase(test.args), test.expected)
		})
	})
})
