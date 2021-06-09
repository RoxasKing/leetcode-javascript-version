import { profitableSchemes } from './profitable-schemes.js'
import assert from 'assert'

describe('profitableSchemes()', () => {
    let tests = [
        { args: { n: 5, minProfit: 3, group: [2, 2], profit: [2, 3] }, expected: 2 },
        { args: { n: 10, minProfit: 5, group: [2, 3, 5], profit: [6, 7, 8] }, expected: 7 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let n = args.n, minProfit = args.minProfit, group = args.group, profit = args.profit
        it(`profitableSchemes(${n}, ${minProfit}, [${group}], [${profit}]) === ${test.expected}`, () => {
            assert.deepStrictEqual(profitableSchemes(n, minProfit, group, profit), test.expected)
        })
    })
})
