/*
  You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

  What is the maximum number of envelopes can you Russian doll? (put one inside other)

  Note:
  Rotation is not allowed.

  Example:
    Input: [[5,4],[6,4],[6,7],[2,3]]
    Output: 3
    Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/russian-doll-envelopes
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Binary Search

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    envelopes.sort((a, b) => {
        if (a[1] != b[1]) { return (a[1] < b[1]) ? -1 : (a[1] > b[1]) ? 1 : 0 }
        return (a[0] > b[0]) ? -1 : (a[0] < b[0]) ? 1 : 0
    })

    let arr = []
    for (let e of envelopes) {
        let num = e[0]
        let i = arr.findIndex(val => (val >= num) ? true : false)
        if (i !== -1) {
            arr[i] = num
        } else {
            arr.push(num)
        }
    }
    return arr.length
}

export { maxEnvelopes }
