/*
  We are playing the Guess Game. The game is as follows:

  I pick a number from 1 to n. You have to guess which number I picked.

  Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

  You call a pre-defined API int guess(int num), which returns 3 possible results:
	1. -1: The number I picked is lower than your guess (i.e. pick < num).
	2. 1: The number I picked is higher than your guess (i.e. pick > num).
	3. 0: The number I picked is equal to your guess (i.e. pick == num).
  Return the number that I picked.

  Example 1:
	Input: n = 10, pick = 6
	Output: 6

  Example 2:
	Input: n = 1, pick = 1
	Output: 1

  Example 3:
	Input: n = 2, pick = 1
	Output: 1

  Example 4:
	Input: n = 2, pick = 2
	Output: 2

  Constraints:
	1. 1 <= n <= 2^31 - 1
	2. 1 <= pick <= n

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/guess-number-higher-or-lower
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Binary Search

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
	let l = 1, r = n
	while (l <= r) {
		let m = l + ((r - l) >> 1)
		let res = guess(m)
		if (res > 0) { l = m + 1 }
		else if (res < 0) { r = m - 1 }
		else { return m }
	}
	return -1
}

import { guess } from './guess-number-higher-or-lower.test.js'
export { guessNumber }
