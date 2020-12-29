import { maximalRectangle } from './maximal-rectangle.js'
import assert from 'assert'

describe('maximalRectangle()', () => {
  let tests = [
    {
      args: [
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
      ],
      expected: 6,
    },
    {
      args: [],
      expected: 0,
    },
    {
      args: [['0']],
      expected: 0,
    },
    {
      args: [['1']],
      expected: 1,
    },
    {
      args: [['0', '0']],
      expected: 0,
    },
  ]

  tests.forEach((test) => {
    it(`maximalRectangle(${test.args}) === ${test.expected}`, () => {
      assert.deepStrictEqual(maximalRectangle(test.args), test.expected)
    })
  })
})
