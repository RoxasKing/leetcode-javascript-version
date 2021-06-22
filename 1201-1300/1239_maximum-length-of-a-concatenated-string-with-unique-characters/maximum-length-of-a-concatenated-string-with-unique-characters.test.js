import { maxLength } from './maximum-length-of-a-concatenated-string-with-unique-characters.js'
import assert from 'assert'

describe('maxLength()', () => {
	let tests = [
		{ args: ['un', 'iq', 'ue'], expected: 4 },
		{ args: ['cha', 'r', 'act', 'ers'], expected: 6 },
		{ args: ['abcdefghijklmnopqrstuvwxyz'], expected: 26 },
		{ args: ['yy', 'bkhwmpbiisbldzknpm'], expected: 0 },
	]

	tests.forEach((test) => {
		it(`maxLength(${test.args}) === ${test.expected}`, () => {
			assert.deepStrictEqual(maxLength(test.args), test.expected)
		})
	})
})
