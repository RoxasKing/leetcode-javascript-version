/*
  Given a non-empty list of words, return the k most frequent elements.

  Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

  Example 1:
    Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
    Output: ["i", "love"]
    Explanation: "i" and "love" are the two most frequent words.
        Note that "i" comes before "love" due to a lower alphabetical order.

  Example 2:
    Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
    Output: ["the", "is", "sunny", "day"]
    Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
        with the number of occurrence being 4, 3, 2 and 1 respectively.

  Note:
    1. You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    2. Input words contain only lowercase letters.

  Follow up:
    Try to solve it in O(n log k) time and O(n) extra space.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/top-k-frequent-words
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Hash
// Priority Queue

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let freq = new Map()
    for (let word of words) {
        if (!freq.has(word)) { freq.set(word, 0) }
        freq.set(word, freq.get(word) + 1)
    }

    let pq = new PriorityQueue((a, b) => {
        if (a.freq != b.freq) { return a.freq < b.freq }
        return a.word > b.word
    })

    freq.forEach((c, w) => {
        pq.push(new wordFreq(w, c))
        if (pq.len() > k) { pq.pop() }
    })

    pq.q.sort((a, b) => {
        if (a.freq != b.freq) { return (a.freq > b.freq) ? -1 : (a.freq < b.freq) ? 1 : 0 }
        return (a.word < b.word) ? -1 : (a.word > b.word) ? 1 : 0
    })

    let out = []
    for (let wf of pq.q) {
        out.push(wf.word)
    }
    return out
}

class wordFreq {
    constructor(word, freq) {
        this.word = word
        this.freq = freq
    }
}

class PriorityQueue {
    q = []
    compareFunc = null

    constructor(compareFunc) {
        this.compareFunc = compareFunc
    }

    len() {
        return this.q.length
    }

    up() {
        let son = this.len() - 1
        while (son > 0) {
            let parent = (son - 1) >> 1
            if (!this.compareFunc(this.q[son], this.q[parent])) { return }
            [this.q[parent], this.q[son]] = [this.q[son], this.q[parent]]
            son = parent
        }
    }

    down() {
        let parent = 0
        while (parent < (this.len() >> 1)) {
            let son = (parent << 1) + 1
            if (son > this.len() - 1) { return }
            if (son + 1 < this.len() && this.compareFunc(this.q[son + 1], this.q[son])) { son++ }
            if (!this.compareFunc(this.q[son], this.q[parent])) { return }
            [this.q[parent], this.q[son]] = [this.q[son], this.q[parent]]
            parent = son
        }
    }

    top() {
        return this.q[0]
    }

    push(x) {
        this.q.push(x)
        this.up()
    }

    pop() {
        let last = this.len() - 1;
        [this.q[0], this.q[last]] = [this.q[last], this.q[0]]
        let out = this.q.pop()
        this.down()
        return out
    }
}

export { topKFrequent }
