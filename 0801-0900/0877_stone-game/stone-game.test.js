import { stoneGame } from './stone-game.js'
import assert from 'assert'

describe('stoneGame()', () => {
	let tests = [
		{ args: [5, 3, 4, 5], expected: true },
	]

	tests.forEach((test) => {
		it(`stoneGame(${test.args}) === ${test.expected}`, () => {
			assert.deepStrictEqual(stoneGame(test.args), test.expected)
		})
	})
})
