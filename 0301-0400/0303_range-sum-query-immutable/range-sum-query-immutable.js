/*
  Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
  Implement the NumArray class:
    1. NumArray(int[] nums) Initializes the object with the integer array nums.
    2. int sumRange(int i, int j) Return the sum of the elements of the nums array in the range [i, j] inclusive (i.e., sum(nums[i], nums[i + 1], ... , nums[j]))

  Example 1:
    Input
      ["NumArray", "sumRange", "sumRange", "sumRange"]
      [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
    Output
      [null, 1, -1, -3]
    Explanation
      NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
      numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
      numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
      numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))

  Constraints:
    1. 0 <= nums.length <= 10^4
    2. -10^5 <= nums[i] <= 10^5
    3. 0 <= i <= j < nums.length
    4. At most 10^4 calls will be made to sumRange.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/range-sum-query-immutable
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.sums = []
    let n = nums.length
    if (n === 0) { return }
    this.sums[0] = nums[0]
    for (let i = 1; i < n; i++) {
        this.sums[i] = this.sums[i - 1] + nums[i]
    }
}

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    if (i === 0) { return this.sums[j] }
    return this.sums[j] - this.sums[i - 1]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

export { NumArray }
