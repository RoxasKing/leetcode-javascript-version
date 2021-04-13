/*
  Imagine a histogram (bar graph). Design an algorithm to compute the volume of water it could hold if someone poured water across the top. You can assume that each histogram bar has width 1.

  The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of water (blue section) are being trapped. Thanks Marcos for contributing this image!

  Example:
    Input: [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/volume-of-histogram-lcci
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Monotone Stack

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let stk = []
    let out = 0
    for (let i = 0; i < height.length; i++) {
        while (stk.length > 0 && height[stk[stk.length - 1]] < height[i]) {
            let bottom = height[stk.pop()]
            if (stk.length === 0) { break }
            out += (i - 1 - stk[stk.length - 1]) * (Math.min(height[stk[stk.length - 1]], height[i]) - bottom)
        }
        stk.push(i)
    }
    return out
}

export { trap }
