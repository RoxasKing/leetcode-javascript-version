/*
  Given an integer n represented as a string, return the smallest good base of n.

  We call k >= 2 a good base of n, if all digits of n base k are 1's.

  Example 1:
	Input: n = "13"
	Output: "3"
	Explanation: 13 base 3 is 111.

  Example 2:
	Input: n = "4681"
	Output: "8"
	Explanation: 4681 base 8 is 11111.

  Example 3:
	Input: n = "1000000000000000000"
	Output: "999999999999999999"
	Explanation: 1000000000000000000 base 999999999999999999 is 11.

  Constraints:
	1. n is an integer in the range [3, 10^18].
	2. n does not contain any leading zeros.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/smallest-good-base
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Important!

// Math

/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function (n) {
	let nVal = parseInt(n)
	for (let m = ~~(Math.log(nVal) / Math.log(2)); m > 1; m--) {
		const k = BigInt(~~(Math.pow(nVal, 1.0 / m)))
		if (k < 2) { continue }
		let mul = BigInt(1), sum = BigInt(1)
		for (let i = 1; i <= m; i++) {
			mul *= k
			sum += mul
		}
		if (sum === BigInt(n)) { return k + '' }
	}
	return (BigInt(n) - BigInt(1)) + ''
}

export { smallestGoodBase }
