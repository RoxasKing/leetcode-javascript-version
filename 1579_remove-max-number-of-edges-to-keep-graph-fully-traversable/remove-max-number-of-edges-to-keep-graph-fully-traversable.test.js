import { maxNumEdgesToRemove } from
  './remove-max-number-of-edges-to-keep-graph-fully-traversable.js'
import assert from 'assert'

describe('maxNumEdgesToRemove()', () => {
  let tests = [
    {
      args: {
        n: 4,
        edges: [[3, 1, 2], [3, 2, 3], [1, 1, 3], [1, 2, 4], [1, 1, 2], [2, 3, 4]]
      },
      expected: 2
    },
    {
      args: {
        n: 4,
        edges: [[3, 1, 2], [3, 2, 3], [1, 1, 4], [2, 1, 4]]
      },
      expected: 0
    },
    {
      args: {
        n: 4,
        edges: [[3, 2, 3], [1, 1, 2], [2, 3, 4]]
      },
      expected: -1
    },
  ]

  tests.forEach((test) => {
    let n = test.args.n, edges = test.args.edges
    it(`maxNumEdgesToRemove(${n}, [${edges}]) === ${test.expected}`, () => {
      assert.deepStrictEqual(maxNumEdgesToRemove(n, edges), test.expected)
    })
  })
})
