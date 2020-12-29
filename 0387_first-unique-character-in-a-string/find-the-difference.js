/*
  给定两个字符串 s 和 t，它们只包含小写字母。
  字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
  请找出在 t 中被添加的字母。

  示例 1：
    输入：s = "abcd", t = "abcde"
    输出："e"
    解释：'e' 是那个被添加的字母。

  示例 2：
    输入：s = "", t = "y"
    输出："y"

  示例 3：
    输入：s = "a", t = "aa"
    输出："a"

  示例 4：
    输入：s = "ae", t = "aea"
    输出："a"

  提示：
    0 <= s.length <= 1000
    t.length == s.length + 1
    s 和 t 只包含小写字母

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/find-the-difference
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let count = new Map()
  for (let c of s) {
    if (count.has(c)) {
      count.set(c, count.get(c) + 1)
    } else {
      count.set(c, 1)
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (count.get(s.charAt(i)) === 1) {
      return i
    }
  }
  return -1
}

var firstUniqChar2 = function (s) {
  let minIdx = s.length
  for (let c of 'abcdefghijklmnopqrstuvwxyz') {
    let index = s.indexOf(c)
    if (index != -1 && index === s.lastIndexOf(c)) {
      minIdx = Math.min(minIdx, index)
    }
  }
  return minIdx === s.length ? -1 : minIdx
}

export { firstUniqChar, firstUniqChar2 }
