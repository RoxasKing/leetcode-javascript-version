/*
  输入一个字符串，打印出该字符串中字符的所有排列。

  你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

  示例:
	输入：s = "abc"
	输出：["abc","acb","bac","bca","cab","cba"]

  限制：
	1 <= s 的长度 <= 8

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Backtracking

/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
	let bs = s.split('')
	let out = []
	dfs(bs, s.length, 0, out)
	return out
}

/**
 * @param {string[]} bs
 * @param {number} n
 * @param {number} i
 * @param {string[]} out 
 */
var dfs = function (bs, n, i, out) {
	if (i === n) {
		out.push(bs.join(''))
		return
	}
	let used = new Map()
	for (let j = i; j < n; j++) {
		if (used.get(bs[j]) === true) { continue }
		used.set(bs[j], true);
		[bs[i], bs[j]] = [bs[j], bs[i]]
		dfs(bs, n, i + 1, out);
		[bs[i], bs[j]] = [bs[j], bs[i]]
	}
}

export { permutation }
