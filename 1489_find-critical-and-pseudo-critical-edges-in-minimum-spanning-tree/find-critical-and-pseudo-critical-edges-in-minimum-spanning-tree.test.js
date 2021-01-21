import { findCriticalAndPseudoCriticalEdges }
  from './find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree.js'
import assert from 'assert'

describe('findCriticalAndPseudoCriticalEdges()', () => {
  let tests = [
    {
      args: {
        n: 5,
        edges: [[0, 1, 1], [1, 2, 1], [2, 3, 2], [0, 3, 2], [0, 4, 3], [3, 4, 3], [1, 4, 6]],
      },
      expected: [[0, 1], [2, 3, 4, 5]]
    },
    {
      args: {
        n: 4,
        edges: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 3, 1]],
      },
      expected: [[], [0, 1, 2, 3]]
    },
    {
      args: {
        n: 6,
        edges: [[0, 1, 1], [1, 2, 1], [0, 2, 1], [2, 3, 4], [3, 4, 2], [3, 5, 2], [4, 5, 2]],
      },
      expected: [[3], [0, 1, 2, 4, 5, 6]]
    },
    {
      args: {
        n: 6,
        edges: [[0, 1, 1], [0, 3, 1], [0, 2, 1], [1, 2, 1], [1, 3, 1], [2, 3, 1]],
      },
      expected: [[], [0, 1, 2, 3, 4, 5]]
    },
  ]

  tests.forEach((test) => {
    let n = test.args.n, edges = test.args.edges
    it(`findCriticalAndPseudoCriticalEdges(${n}, [${edges}]) === ${test.expected}`, () => {
      assert.deepStrictEqual(findCriticalAndPseudoCriticalEdges(n, edges), test.expected)
    })
  })
})
