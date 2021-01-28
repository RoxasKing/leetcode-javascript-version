/*
  For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

  Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

  Example 1:
    Input: A = [1,2,0,0], K = 34
    Output: [1,2,3,4]
    Explanation: 1200 + 34 = 1234

  Example 2:
    Input: A = [2,7,4], K = 181
    Output: [4,5,5]
    Explanation: 274 + 181 = 455

  Example 3:
    Input: A = [2,1,5], K = 806
    Output: [1,0,2,1]
    Explanation: 215 + 806 = 1021

  Example 4:
    Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
    Output: [1,0,0,0,0,0,0,0,0,0,0]
    Explanation: 9999999999 + 1 = 10000000000

  Note：
    1. 1 <= A.length <= 10000
    2. 0 <= A[i] <= 9
    3. 0 <= K <= 10000
    4. If A.length > 1, then A[0] != 0

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/add-to-array-form-of-integer
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  A = A.reverse()
  let B = []
  while (K > 0) { B.push(K % 10), K = Math.floor(K / 10) }
  let C = [], remain = 0
  for (let i = 0, j = 0; i < A.length || j < B.length;) {
    if (i < A.length) { remain += A[i], i++ }
    if (j < B.length) { remain += B[j], j++ }
    C.push(remain % 10), remain = Math.floor(remain / 10)
  }
  if (remain > 0) { C.push(remain) }
  return C.reverse()
}

export { addToArrayForm }
