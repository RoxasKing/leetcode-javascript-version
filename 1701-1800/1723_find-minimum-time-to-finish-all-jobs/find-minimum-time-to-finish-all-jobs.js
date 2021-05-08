/*
  You are given an integer array jobs, where jobs[i] is the amount of time it takes to complete the ith job.

  There are k workers that you can assign jobs to. Each job should be assigned to exactly one worker. The working time of a worker is the sum of the time it takes to complete all jobs assigned to them. Your goal is to devise an optimal assignment such that the maximum working time of any worker is minimized.

  Return the minimum possible maximum working time of any assignment.

  Example 1:
    Input: jobs = [3,2,3], k = 3
    Output: 3
    Explanation: By assigning each person one job, the maximum time is 3.

  Example 2:
    Input: jobs = [1,2,4,7,8], k = 2
    Output: 11
    Explanation: Assign the jobs the following way:
      Worker 1: 1, 2, 8 (working time = 1 + 2 + 8 = 11)
      Worker 2: 4, 7 (working time = 4 + 7 = 11)
      The maximum working time is 11.

  Constraints:
    1. 1 <= k <= jobs.length <= 12
    2. 1 <= jobs[i] <= 10^7

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/find-minimum-time-to-finish-all-jobs
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Important!

// Backtracking

/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function (jobs, k) {
    let n = jobs.length
    jobs.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0)
    let max = jobs[n - 1], sum = 0
    for (let job of jobs) { sum += job }

    let l = max, r = sum
    while (l < r) {
        let maxWorkTime = (l + r) >> 1
        if (!valid(jobs, k, n, maxWorkTime)) {
            l = maxWorkTime + 1
        } else {
            r = maxWorkTime
        }
    }
    return l
}

/**
 * @param {number[]} jobs
 * @param {number} n
 * @param {number} maxWorkTime
 * @param {boolean}
 */
function valid(jobs, k, n, maxWorkTime) {
    return backtrack(jobs, n, maxWorkTime, 0, new Array(k).fill(0))
}

/**
 * @param {number[]} jobs
 * @param {number} n
 * @param {number} maxWorkTime
 * @param {number} idx
 * @param {number[]} worker 
 * @param {boolean}
 */
function backtrack(jobs, n, maxWorkTime, idx, worker) {
    if (idx === n) { return true }
    for (let i = 0; i < worker.length; i++) {
        if (worker[i] + jobs[idx] <= maxWorkTime) {
            worker[i] += jobs[idx]
            if (backtrack(jobs, n, maxWorkTime, idx + 1, worker)) {
                return true
            }
            worker[i] -= jobs[idx]
        }
        if (worker[i] === 0 || worker[i] + jobs[idx] === maxWorkTime) {
            break
        }
    }
    return false
}

export { minimumTimeRequired }
