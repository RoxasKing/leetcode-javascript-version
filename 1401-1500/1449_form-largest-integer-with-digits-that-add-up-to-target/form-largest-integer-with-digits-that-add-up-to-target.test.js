import { largestNumber } from './form-largest-integer-with-digits-that-add-up-to-target.js'
import assert from 'assert'

describe('largestNumber()', () => {
	let tests = [
		{ args: { cost: [4, 3, 2, 5, 6, 7, 2, 5, 5], target: 9 }, expected: "7772" },
		{ args: { cost: [7, 6, 5, 5, 5, 6, 8, 7, 8], target: 12 }, expected: "85" },
		{ args: { cost: [2, 4, 6, 2, 4, 6, 4, 4, 4], target: 5 }, expected: "0" },
		{ args: { cost: [6, 10, 15, 40, 40, 40, 40, 40, 40], target: 47 }, expected: "32211" },
	]

	tests.forEach((test) => {
		let args = test.args
		let cost = args.cost, target = args.target
		it(`largestNumber([${cost}], ${target}) === ${test.expected}`, () => {
			assert.deepStrictEqual(largestNumber(cost, target), test.expected)
		})
	})
})
