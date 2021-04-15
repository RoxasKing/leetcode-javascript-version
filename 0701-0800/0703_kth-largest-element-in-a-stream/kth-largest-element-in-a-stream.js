/*
  Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

  Implement KthLargest class:
    KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
    int add(int val) Returns the element representing the kth largest element in the stream.

  Example 1:
  Input
    ["KthLargest", "add", "add", "add", "add", "add"]
    [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
  Output
    [null, 4, 5, 5, 8, 8]
  Explanation
    KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    kthLargest.add(3);   // return 4
    kthLargest.add(5);   // return 5
    kthLargest.add(10);  // return 5
    kthLargest.add(9);   // return 8
    kthLargest.add(4);   // return 8

  Constraints:
    1 <= k <= 104
    0 <= nums.length <= 104
    -104 <= nums[i] <= 104
    -104 <= val <= 104
    At most 104 calls will be made to add.
    It is guaranteed that there will be at least k elements in the array when you search for the kth element.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/kth-largest-element-in-a-stream
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Priority Queue(Heap Sort)

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    let maxh = new PriorityQueue((a, b) => a > b ? true : false)
    let minh = new PriorityQueue((a, b) => a < b ? true : false)
    for (let num of nums) { minh.push(num) }
    while (minh.size() > k - 1) {
        maxh.push(minh.pop())
    }
    this.maxh = maxh
    this.minh = minh
}

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.minh.size() > 0 && val > this.minh.top()) {
        this.maxh.push(this.minh.pop())
        this.minh.push(val)
    } else {
        this.maxh.push(val)
    }
    return this.maxh.top()
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class PriorityQueue {
    _queue = []
    _compareFunc = undefined

    constructor(compareFunc) {
        this._compareFunc = compareFunc
    }

    push(x) {
        this._queue.push(+x)
        this._up()
    }

    pop() {
        let last = this.size() - 1;
        [this._queue[0], this._queue[last]] = [this._queue[last], this._queue[0]]
        let out = this._queue.pop()
        this._down()
        return out
    }

    top() {
        return this._queue[0]
    }

    size() {
        return this._queue.length
    }

    _up() {
        let son = this.size() - 1
        while (son > 0) {
            let parent = (son - 1) >> 1
            if (!this._compareFunc(this._queue[son], this._queue[parent])) { return }
            [this._queue[parent], this._queue[son]] = [this._queue[son], this._queue[parent]]
            son = parent
        }
    }

    _down() {
        let parent = 0
        while (parent < (this.size() >> 1)) {
            let son = (parent << 1) + 1
            if (son > this.size() - 1) {
                return
            }
            if (son + 1 < this.size() && this._compareFunc(this._queue[son + 1], this._queue[son])) {
                son++
            }
            if (!this._compareFunc(this._queue[son], this._queue[parent])) { return }
            [this._queue[parent], this._queue[son]] = [this._queue[son], this._queue[parent]]
            parent = son
        }
    }
}

export { KthLargest }
