/*
  Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

  Examples:
  [2,3,4] , the median is 3

  [2,3], the median is (2 + 3) / 2 = 2.5

  Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Your job is to output the median array for each window in the original array.

  For example,
  Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

  Window position                Median
  ---------------               -----
  [1  3  -1] -3  5  3  6  7       1
   1 [3  -1  -3] 5  3  6  7       -1
   1  3 [-1  -3  5] 3  6  7       -1
   1  3  -1 [-3  5  3] 6  7       3
   1  3  -1  -3 [5  3  6] 7       5
   1  3  -1  -3  5 [3  6  7]      6
  Therefore, return the median sliding window as [1,-1,-1,3,5,6].

  Note:
  You may assume k is always valid, ie: k is always smaller than input array's size for non-empty array.
  Answers within 10^-5 of the actual value will be accepted as correct.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/sliding-window-median
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Priority Queue + Sliding Window

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    let out = []
    let midh = new MidHeap()
    for (let i = 0; i < nums.length; i++) {
        midh.push(nums[i])
        if (i > k - 1) { midh.erase(nums[i - k]) }
        if (i >= k - 1) { out.push(midh.getmid()) }
    }
    return out
}

class MidHeap {
    _mark = new Map()
    _maxh = new PriorityQueue((a, b) => a > b ? true : false)
    _minh = new PriorityQueue((a, b) => a < b ? true : false)
    _maxd = 0
    _mind = 0

    getmid() {
        if (((this._maxh.size() - this._maxd + this._minh.size() - this._mind) & 1) === 1) {
            return this._maxh.top()
        }
        return (this._maxh.top() + this._minh.top()) / 2.0
    }

    push(x) {
        if (this._maxh.size() == 0 || x <= this._maxh.top()) {
            this._maxh.push(x)
        } else {
            this._minh.push(x)
        }
        this._balance()
    }

    erase(x) {
        if (!this._mark.has(x)) { this._mark.set(x, 0) }
        this._mark.set(x, this._mark.get(x) + 1)
        if (x <= this._maxh.top()) {
            this._maxd++
        } else {
            this._mind++
        }
        this._balance()
    }

    _balance() {
        while (true) {
            while (this._maxh.size() > 0 && this._mark.get(this._maxh.top()) > 0) {
                this._mark.set(this._maxh.top(), this._mark.get(this._maxh.top()) - 1)
                this._maxd--
                this._maxh.pop()
            }
            while (this._minh.size() > 0 && this._mark.get(this._minh.top()) > 0) {
                this._mark.set(this._minh.top(), this._mark.get(this._minh.top()) - 1)
                this._mind--
                this._minh.pop()
            }
            if (this._maxh.size() - this._maxd < this._minh.size() - this._mind) {
                this._maxh.push(this._minh.pop())
            } else if (this._maxh.size() - this._maxd > this._minh.size() - this._mind + 1) {
                this._minh.push(this._maxh.pop())
            } else {
                return
            }
        }
    }
}

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

export { medianSlidingWindow }
