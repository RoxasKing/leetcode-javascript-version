import { solution } from './first-bad-version.js'
import assert from 'assert'

let badStart = 0

/**
 * 
 * @param {number} version 
 * @return {number}
 */
function isBadVersion(version) {
	return version >= badStart
}

describe('solution()', () => {
	let firstBadVersion = solution(isBadVersion)

	let tests = [
		{ args: { n: 5, bad: 4 }, expected: 4 },
		{ args: { n: 1, bad: 1 }, expected: 1 },
	]

	tests.forEach((test) => {
		let args = test.args
		it(`solution(${args.n}, ${args.bad}) === ${test.expected}`, () => {
			badStart = args.bad
			assert.deepStrictEqual(firstBadVersion(args.n), test.expected)
		})
	})
})
