import { readBinaryWatch } from './binary-watch.js'
import assert from 'assert'

describe('readBinaryWatch()', () => {
	let tests = [
		{ args: 1, expected: ['0:01', '0:02', '0:04', '0:08', '0:16', '0:32', '1:00', '2:00', '4:00', '8:00'] },
		{ args: 9, expected: [] },
	]

	tests.forEach((test) => {
		it(`readBinaryWatch(${test.args}) === ${test.expected}`, () => {
			assert.deepStrictEqual(readBinaryWatch(test.args), test.expected)
		})
	})
})
