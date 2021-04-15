/*
  Given a list accounts, each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

  Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email that is common to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

  After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

  Example 1:
  Input:
    accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
  Output:
    [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
  Explanation:
    The first and third John's are the same person as they have the common email "johnsmith@mail.com".
    The second John and Mary are different people as none of their email addresses are used by other accounts.
    We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.

  Note:
    The length of accounts will be in the range [1, 1000].
    The length of accounts[i] will be in the range [1, 10].
    The length of accounts[i][j] will be in the range [1, 30].

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/accounts-merge
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Union-Find

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    let n = accounts.length
    let uf = new unionFind(n)
    let emails = new Map()

    accounts.forEach((account, i) => {
        account.slice(1).forEach((email) => {
            if (emails.has(email)) {
                uf.union(emails.get(email), i)
            } else {
                emails.set(email, i)
            }
        })
    })

    let accountsMap = new Map()

    for (let i = 0; i < n; i++) {
        let idx = uf.find(i)
        if (accountsMap.has(idx)) { continue }
        let name = accounts[i][0]
        accountsMap.set(idx, [name])
    }

    emails.forEach((i, email) => {
        let idx = uf.find(i)
        accountsMap.get(idx).push(email)
    })

    let out = []

    accountsMap.forEach((account) => {
        account.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))
        out.push(account)
    })

    return out
}

class unionFind {
    ancestor = []
    isEnd = []

    constructor(n) {
        for (let i = 0; i < n; i++) {
            this.ancestor.push(i)
            this.isEnd.push(false)
        }
    }

    find(x) {
        if (this.isEnd[this.ancestor[x]]) {
            return this.ancestor[x]
        }
        if (this.ancestor[x] !== x) {
            this.ancestor[x] = this.find(this.ancestor[x])
            this.isEnd[x] = false
            this.isEnd[this.ancestor[x]] = true
        }
        return this.ancestor[x]
    }

    union(x, y) {
        let ancestorX = this.find(x)
        let ancestorY = this.find(y)
        this.ancestor[ancestorX] = ancestorY
        this.isEnd[ancestorX] = false
        this.isEnd[ancestorY] = true
    }
}

export { accountsMerge }
