/*
  有一堆石头，每块石头的重量都是正整数。
  每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
    如果 x == y，那么两块石头都会被完全粉碎；
    如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
  最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。

  示例：
    输入：[2,7,4,1,8,1]
    输出：1
    解释：
    先选出 7 和 8，得到 1，所以数组转换为 [2,4,1,1,1]，
    再选出 2 和 4，得到 2，所以数组转换为 [2,1,1,1]，
    接着是 2 和 1，得到 1，所以数组转换为 [1,1,1]，
    最后选出 1 和 1，得到 0，最终数组转换为 [1]，这就是最后剩下那块石头的重量。

  提示：
    1 <= stones.length <= 30
    1 <= stones[i] <= 1000

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/last-stone-weight
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


// Priority Queue

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let pq = new PriorityQueue()
  for (let stone of stones) {
    pq.push(stone)
  }

  while (pq.size() > 1) {
    let a = pq.pop()
    let b = pq.pop()
    if (a != b) {
      pq.push(Math.abs(a - b))
    }
  }

  if (pq.size() == 0) {
    return 0
  }
  return pq.pop()
}

class PriorityQueue {
  _queue = []

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

  size() {
    return this._queue.length
  }

  _up() {
    let son = this.size() - 1
    while (son > 0) {
      let parent = (son - 1) >> 1
      if (this._queue[parent] >= this._queue[son]) {
        return
      }
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
      if (son + 1 < this.size() && this._queue[son + 1] > this._queue[son]) {
        son++
      }
      if (this._queue[son] <= this._queue[parent]) {
        return
      }
      [this._queue[parent], this._queue[son]] = [this._queue[son], this._queue[parent]]
      parent = son
    }
  }
}

export { lastStoneWeight }
