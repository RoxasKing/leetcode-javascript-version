/*
  Given an integer n, return the least number of perfect square numbers that sum to n.

  A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

  Example 1:
	Input: n = 12
	Output: 3
	Explanation: 12 = 4 + 4 + 4.

  Example 2:
	Input: n = 13
	Output: 2
	Explanation: 13 = 4 + 9.

  Constraints:
	1 <= n <= 10^4

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/perfect-squares
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Dynamic Programming

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
	let f = [0, 1]
	for (let i = 2; i <= n; i++) {
		f.push(i)
		for (let j = 2; j * j <= i; j++) {
			f[i] = Math.min(f[i], f[i - j * j] + 1)
		}
	}
	return f[n]
}

export { numSquares }
