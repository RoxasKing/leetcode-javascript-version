/*
  A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

  Implement the Trie class:
    1. Trie() Initializes the trie object.
    2. void insert(String word) Inserts the string word into the trie.
    3. boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
    4. boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

  Example 1:
    Input
      ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
      [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
    Output
      [null, null, true, false, true, null, true]
    Explanation
      Trie trie = new Trie();
      trie.insert("apple");
      trie.search("apple");   // return True
      trie.search("app");     // return False
      trie.startsWith("app"); // return True
      trie.insert("app");
      trie.search("app");     // return True

  Constraints:
    1. 1 <= word.length, prefix.length <= 2000
    2. word and prefix consist only of lowercase English letters.
    3. At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Trie

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.next = new Array(26).fill(null)
    this.isEnd = false
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this
    for (let i = 0; i < word.length; i++) {
        let idx = word.charCodeAt(i) - 97
        if (node.next[idx] === null) {
            node.next[idx] = new Trie()
        }
        node = node.next[idx]
    }
    node.isEnd = true
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this
    for (let i = 0; i < word.length; i++) {
        let idx = word.charCodeAt(i) - 97
        if (node.next[idx] === null) {
            return false
        }
        node = node.next[idx]
    }
    return node.isEnd
}

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this
    for (let i = 0; i < prefix.length; i++) {
        let idx = prefix.charCodeAt(i) - 97
        if (node.next[idx] === null) {
            return false
        }
        node = node.next[idx]
    }
    return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export { Trie }
