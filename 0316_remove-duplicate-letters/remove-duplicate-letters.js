/*
  给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

  注意：该题与 1081 https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters 相同

  示例 1：
    输入：s = "bcabc"
    输出："abc"

  示例 2：
    输入：s = "cbacdcbc"
    输出："acdb"

  提示：
    1 <= s.length <= 10^4
    s 由小写英文字母组成

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/remove-duplicate-letters
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let cnt = new Map()
    for (let c of s) {
        if (!cnt.has(c)) {
            cnt.set(c, 1)
            continue
        }
        cnt.set(c, cnt.get(c) + 1)
    }
    let mark = new Map()
    let stk = []
    for (let c of s) {
        if (mark.get(c)) {
            cnt.set(c, cnt.get(c) - 1)
            continue
        }
        while (stk.length > 0 && (stk[stk.length - 1] >= c) && cnt.get(stk[stk.length - 1]) > 1) {
            let char = stk[stk.length - 1]
            mark.set(char, false)
            cnt.set(char, cnt.get(char) - 1)
            stk.pop()
        }
        mark.set(c, true)
        stk.push(c)
    }
    return stk.join('')
}

export { removeDuplicateLetters }
