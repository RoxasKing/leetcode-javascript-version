import { hammingWeight } from './er-jin-zhi-zhong-1de-ge-shu-lcof.js'
import assert from 'assert'

describe('hammingWeight()', () => {
	let tests = [
		{ args: 0b00000000000000000000000000001011, expected: 3 },
		{ args: 0b00000000000000000000000010000000, expected: 1 },
		{ args: 0b11111111111111111111111111111101, expected: 31 },
	]

	tests.forEach((test) => {
		it(`hammingWeight(${test.args}) === ${test.expected}`, () => {
			assert.deepStrictEqual(hammingWeight(test.args), test.expected)
		})
	})
})
