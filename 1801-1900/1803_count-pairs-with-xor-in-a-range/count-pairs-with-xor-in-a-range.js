/*
  Given a (0-indexed) integer array nums and two integers low and high, return the number of nice pairs.
  A nice pair is a pair (i, j) where 0 <= i < j < nums.length and low <= (nums[i] XOR nums[j]) <= high.

  Example 1:
    Input: nums = [1,4,2,7], low = 2, high = 6
    Output: 6
    Explanation: All nice pairs (i, j) are as follows:
        - (0, 1): nums[0] XOR nums[1] = 5
        - (0, 2): nums[0] XOR nums[2] = 3
        - (0, 3): nums[0] XOR nums[3] = 6
        - (1, 2): nums[1] XOR nums[2] = 6
        - (1, 3): nums[1] XOR nums[3] = 3
        - (2, 3): nums[2] XOR nums[3] = 5

  Example 2:
    Input: nums = [9,8,4,2,1], low = 5, high = 14
    Output: 8
    Explanation: All nice pairs (i, j) are as follows:
             - (0, 2): nums[0] XOR nums[2] = 13
        - (0, 3): nums[0] XOR nums[3] = 11
        - (0, 4): nums[0] XOR nums[4] = 8
        - (1, 2): nums[1] XOR nums[2] = 12
        - (1, 3): nums[1] XOR nums[3] = 10
        - (1, 4): nums[1] XOR nums[4] = 9
        - (2, 3): nums[2] XOR nums[3] = 6
        - (2, 4): nums[2] XOR nums[4] = 5


  Constraints:
    1. 1 <= nums.length <= 2 * 10^4
    2. 1 <= nums[i] <= 2 * 10^4
    3. 1 <= low <= high <= 2 * 10^4

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/count-pairs-with-xor-in-a-range
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Important!!

// Trie + Bit Manipulation

/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countPairs = function (nums, low, high) {
    let out = 0
    let t = new Trie()
    for (let num of nums) {
        out += t.lower(num, high + 1) - t.lower(num, low)
        t.insert(num)
    }
    return out
}

class Trie {
    child = new Array(2)
    count = 0
    constructor() { }

    /**
     * @param {number} num
     */
    insert(num) {
        let t = this
        for (let i = 31; i >= 0; i--) {
            let idx = (num >> i) & 1
            if (t.child[idx] === undefined) {
                t.child[idx] = new Trie()
            }
            t = t.child[idx]
            t.count++
        }
    }

    /**
     * @param {number} num
     * @param {number} low
     * @return {number}
     */
    lower(num, low) {
        let out = 0
        let t = this
        for (let i = 31; i >= 0 && t !== undefined; i--) {
            let numIdx = (num >> i) & 1
            let lowIdx = (low >> i) & 1
            if (lowIdx === 1) {
                if (t.child[numIdx] !== undefined) {
                    out += t.child[numIdx].count
                }
                t = t.child[1 - numIdx]
            } else {
                t = t.child[numIdx]
            }
        }
        return out
    }
}

export { countPairs }
