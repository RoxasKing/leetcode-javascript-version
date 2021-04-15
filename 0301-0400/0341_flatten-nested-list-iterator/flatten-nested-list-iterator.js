/*
  You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.

  Implement the NestedIterator class:
    1. NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList.
    2. int next() Returns the next integer in the nested list.
    3. boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.

  Example 1:
    Input: nestedList = [[1,1],2,[1,1]]
    Output: [1,1,2,1,1]
    Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

  Example 2:
    Input: nestedList = [1,[4,[6]]]
    Output: [1,4,6]
    Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].

  Constraints:
    1. 1 <= nestedList.length <= 500
    2. The values of the integers in the nested list is in the range [-10^6, 10^6].

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/flatten-nested-list-iterator
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Recursion

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.list = nestedList
    this.idx = 0
    this.iter = null
}


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    while (true) {
        if (this.idx === this.list.length) { return false }

        if (this.list[this.idx].isInteger()) { return true }

        if (this.iter === null) {
            this.iter = new NestedIterator(this.list[this.idx].getList())
        }

        if (this.iter.hasNext()) { return true }

        this.idx++
        this.iter = null
    }
}

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    if (!this.list[this.idx].isInteger()) { return this.iter.next() }

    let out = this.list[this.idx].getInteger()
    this.idx++
    return out
}

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

function NestedInteger() {
    this.isNumber = false
    this.value = -1 << 31
    this.list = []

    /**
     * Return true if this NestedInteger holds a single integer, rather than a nested list.
     * @return { boolean }
     */
    this.isInteger = function () {
        return this.isNumber
    }

    /**
     * Return the single integer that this NestedInteger holds, if it holds a single integer
     * Return null if this NestedInteger holds a nested list
     * @return { number }
     */
    this.getInteger = function () {
        return this.value
    }

    /**
     * 
     * @param {number} value 
     */
    this.setInteger = function (value) {
        this.isNumber = true
        this.value = value
        this.list = []
    }

    /**
     * 
     * @param {NestedInteger} elem 
     */
    this.add = function (elem) {
        this.integer = false
        this.value = -1 << 31
        this.list.push(elem)
    }

    /**
     * 
     * Return the nested list that this NestedInteger holds, if it holds a nested list
     * Return null if this NestedInteger holds a single integer
     * @return {NestedInteger[]}
     */
    this.getList = function () {
        return this.list
    }
}

export { NestedIterator, NestedInteger }
