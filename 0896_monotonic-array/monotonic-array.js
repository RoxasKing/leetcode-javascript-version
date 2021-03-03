/*
  An array is monotonic if it is either monotone increasing or monotone decreasing.
  An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
  Return true if and only if the given array A is monotonic.

  Example 1:
    Input: [1,2,2,3]
    Output: true

  Example 2:
    Input: [6,5,4,4]
    Output: true

  Example 3:
    Input: [1,3,2]
    Output: false

  Example 4:
    Input: [1,2,4,5]
    Output: true

  Example 5:
    Input: [1,1,1]
    Output: true

  Note:
    1. 1 <= A.length <= 50000
    2. -100000 <= A[i] <= 100000

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/monotonic-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    let inc = [], dec = []
    for (let a of A) {
        if (inc.length <= 1) {
            if (inc.length == 1 && inc[0] <= a) { inc.pop() }
            inc.push(a)
        }
        if (dec.length <= 1) {
            if (dec.length == 1 && dec[0] >= a) { dec.pop() }
            dec.push(a)
        }
        if (inc.length > 1 && dec.length > 1) { return false }
    }
    return true
}

export { isMonotonic }
