import { sortItems } from './sort-items-by-groups-respecting-dependencies.js'
import assert from 'assert'

describe('sortItems()', () => {
  let tests = [
    {
      args: [
        8,
        2,
        [-1, -1, 1, 0, 0, 1, 0, -1],
        [[], [6], [5], [6], [3, 6], [], [], []],
      ],
      expected: [6, 3, 4, 5, 2, 0, 1, 7]
    },
    {
      args: [
        8,
        2,
        [-1, -1, 1, 0, 0, 1, 0, -1],
        [[], [6], [5], [6], [3], [], [4], []],
      ],
      expected: []
    },
    {
      args: [
        5,
        5,
        [2, 0, -1, 3, 0],
        [[2, 1, 3], [2, 4], [], [], []],
      ],
      expected: [2, 4, 1, 3, 0]
    },
    {
      args: [
        5,
        5,
        [0, 1, 2, 3, 4],
        [[1], [0], [2], [3], [4]],
      ],
      expected: []
    },
    {
      args: [
        4,
        1,
        [-1, 0, 0, -1],
        [[], [0], [1, 3], [2]],
      ],
      expected: []
    },
    {
      args: [
        10,
        4,
        [2, 2, 2, 1, 0, 1, 3, 2, 0, 1],
        [[7, 6, 2, 5, 3], [], [], [], [7], [], [], [], [], []],
      ],
      expected: [3, 5, 9, 6, 2, 7, 1, 0, 4, 8]
    },
  ]

  tests.forEach((test) => {
    it(`sortItems(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(sortItems(...test.args), test.expected)
    })
  })
})
