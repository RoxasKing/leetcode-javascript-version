/*
  Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

  Return the maximum possible length of s.

  Example 1:
	Input: arr = ["un","iq","ue"]
	Output: 4
	Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
	  Maximum length is 4.

  Example 2:
	Input: arr = ["cha","r","act","ers"]
	Output: 6
	Explanation: Possible solutions are "chaers" and "acters".

  Example 3:
	Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
	Output: 26

  Constraints:
	1. 1 <= arr.length <= 16
	2. 1 <= arr[i].length <= 26
	3. arr[i] contains only lower case English letters.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Backtracking

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
	let n = arr.length
	let nums = []
	for (let i = 0; i < n; i++) {
		nums.push(0)
		let cnt = new Array(26).fill(0)
		for (let j = 0; j < arr[i].length; j++) {
			let idx = arr[i].charCodeAt(j) - 97
			cnt[idx]++
			if (cnt[idx] > 1) { nums[i] = -1; break }
			nums[i] |= 1 << idx
		}
	}
	return backtracking(arr, nums, n, 0, 0, 0)
}

/**
 * @param {string[]} arr
 * @param {number[]} nums
 * @param {number} n
 * @param {number} i
 * @param {number} curVal
 * @param {number} curLen
 * @return {number}
 */
var backtracking = function (arr, nums, n, i, curVal, curLen) {
	if (i === n) { return curLen }

	let out = backtracking(arr, nums, n, i + 1, curVal, curLen)

	if (nums[i] !== -1 && (curVal ^ nums[i]) === (curVal + nums[i])) {
		curVal += nums[i]
		curLen += arr[i].length
		out = Math.max(out, backtracking(arr, nums, n, i + 1, curVal, curLen))
	}

	return out
}

export { maxLength }
