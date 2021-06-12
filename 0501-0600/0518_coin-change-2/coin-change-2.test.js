import { change } from './coin-change-2.js'
import assert from 'assert'

describe('change()', () => {
	let tests = [
		{ args: { amount: 5, coins: [1, 2, 5] }, expected: 4 },
		{ args: { amount: 3, coins: [2] }, expected: 0 },
		{ args: { amount: 10, coins: [10] }, expected: 1 },
	]

	tests.forEach((test) => {
		let args = test.args
		let amount = args.amount, coins = args.coins
		it(`change(${amount}, [${coins}]) === ${test.expected}`, () => {
			assert.deepStrictEqual(change(amount, coins), test.expected)
		})
	})
})
