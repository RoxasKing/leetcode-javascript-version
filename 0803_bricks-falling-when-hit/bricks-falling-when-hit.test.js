import { hitBricks } from './bricks-falling-when-hit.js'
import assert from 'assert'

describe('hitBricks()', () => {
  let tests = [
    {
      args: {
        grid: [[1, 0, 0, 0], [1, 1, 1, 0]],
        hits: [[1, 0]]
      },
      expected: [2]
    },
    {
      args: {
        grid: [[1, 0, 0, 0], [1, 1, 0, 0]],
        hits: [[1, 1], [1, 0]]
      },
      expected: [0, 0]
    },
    {
      args: {
        grid: [
          [0, 1, 1, 1, 1],
          [1, 1, 1, 1, 0],
          [1, 1, 1, 1, 0],
          [0, 0, 1, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        hits: [
          [6, 0],
          [1, 0],
          [4, 3],
          [1, 2],
          [7, 1],
          [6, 3],
          [5, 2],
          [5, 1],
          [2, 4],
          [4, 4],
          [7, 3],
        ]
      },
      expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
  ]

  tests.forEach((test) => {
    it(`hitBricks([${test.args.grid}], [${test.args.hits}]) === [${test.expected}]`, () => {
      assert.deepStrictEqual(hitBricks(test.args.grid, test.args.hits), test.expected)
    })
  })
})
