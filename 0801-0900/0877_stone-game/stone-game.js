/*
  Alex and Lee play a game with piles of stones.  There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].

  The objective of the game is to end with the most stones.  The total number of stones is odd, so there are no ties.

  Alex and Lee take turns, with Alex starting first.  Each turn, a player takes the entire pile of stones from either the beginning or the end of the row.  This continues until there are no more piles left, at which point the person with the most stones wins.

  Assuming Alex and Lee play optimally, return True if and only if Alex wins the game.

  Example 1:
	Input: piles = [5,3,4,5]
	Output: true
	Explanation:
	  Alex starts first, and can only take the first 5 or the last 5.
	  Say he takes the first 5, so that the row becomes [3, 4, 5].
	  If Lee takes 3, then the board is [4, 5], and Alex takes 5 to win with 10 points.
	  If Lee takes the last 5, then the board is [3, 4], and Alex takes 4 to win with 9 points.
	  This demonstrated that taking the first 5 was a winning move for Alex, so we return true.

  Constraints:
	1. 2 <= piles.length <= 500
	2. piles.length is even.
	3. 1 <= piles[i] <= 500
	4. sum(piles) is odd.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/stone-game
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Dynamic Programming
// DFS

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
	let l = 0, r = piles.length - 1
	return dp(piles, 0, 0, l, r)
}

/**
 * @param {number[]} piles
 * @param {number} a
 * @param {number} b
 * @param {number} l
 * @param {number} r
 * @return {boolean}
 */
var dp = function (piles, a, b, l, r) {
	if (l > r) { return a > b }
	return dp(piles, a + piles[l], b, l + 1, r) || dp(piles, a, b + piles[r], l, r - 1)
}

export { stoneGame }
