/*
  You are given an array of integers stones where stones[i] is the weight of the ith stone.

  We are playing a game with the stones. On each turn, we choose any two stones and smash them together. Suppose the stones have weights x and y with x <= y. The result of this smash is:

    If x == y, both stones are destroyed, and
    If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.

  At the end of the game, there is at most one stone left.

  Return the smallest possible weight of the left stone. If there are no stones left, return 0.

  Example 1:
    Input: stones = [2,7,4,1,8,1]
    Output: 1
    Explanation:
      We can combine 2 and 4 to get 2, so the array converts to [2,7,1,8,1] then,
      we can combine 7 and 8 to get 1, so the array converts to [2,1,1,1] then,
      we can combine 2 and 1 to get 1, so the array converts to [1,1,1] then,
      we can combine 1 and 1 to get 0, so the array converts to [1], then that's the optimal value.

  Example 2:
    Input: stones = [31,26,33,21,40]
    Output: 5

  Example 3:
    Input: stones = [1,2]
    Output: 1

  Constraints:
    1. 1 <= stones.length <= 30
    2. 1 <= stones[i] <= 100

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/last-stone-weight-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Important!

// Dynamic Programming

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    let sum = stones.reduce((pre, cur) => pre + cur, 0)
    let m = sum >> 1
    let f0 = new Array(m + 1).fill(false)
    let f1 = new Array(m + 1).fill(false)
    f0[0] = true
    for (let stone of stones) {
        for (let i = m; i >= 0; i--) {
            f1[i] = f0[i]
            if (i >= stone) { f1[i] = f1[i] || f0[i - stone] }
        }
        [f0, f1] = [f1, f0]
    }

    for (let i = m; i >= 0; i--) {
        if (f0[i]) { return sum - 2 * i }
    }
}

export { lastStoneWeightII }
