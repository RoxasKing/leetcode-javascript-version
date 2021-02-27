/*
  Given an integer array arr, return the length of a maximum size turbulent subarray of arr.
  A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.
  More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:
    For i <= k < j:
      arr[k] > arr[k + 1] when k is odd, and
      arr[k] < arr[k + 1] when k is even.
    Or, for i <= k < j:
      arr[k] > arr[k + 1] when k is even, and
      arr[k] < arr[k + 1] when k is odd.

  Example 1:
    Input: arr = [9,4,2,10,7,8,8,1,9]
    Output: 5
    Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]

  Example 2:
    Input: arr = [4,8,12,16]
    Output: 2

  Example 3:
    Input: arr = [100]
    Output: 1

  Constraints:
    1 <= arr.length <= 4 * 10^4
    0 <= arr[i] <= 10^9

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-turbulent-subarray
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
    let out = 1
    let count = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            if (i - 2 < 0 || arr[i - 2] > arr[i - 1]) {
                count++
            } else {
                count = 2
            }
        } else if (arr[i] < arr[i - 1]) {
            if (i - 2 < 0 || arr[i - 2] < arr[i - 1]) {
                count++
            } else {
                count = 2
            }
        } else {
            count = 1
        }
        out = Math.max(out, count)
    }
    return out
}

export { maxTurbulenceSize }
