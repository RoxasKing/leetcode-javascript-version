import { GetImportance, Employee } from './employee-importance.js'
import assert from 'assert'

describe('GetImportance()', () => {
    let e1 = new Employee(1, 5, [2, 3])
    let e2 = new Employee(2, 3, [])
    let e3 = new Employee(3, 3, [])
    let tests = [
        { args: { employees: [e1, e2, e3], id: 1 }, expected: 11 },
    ]

    tests.forEach((test) => {
        let args = test.args
        let employees = args.employees, id = args.id
        it(`GetImportance(${employees}, ${id}) === ${test.expected}`, () => {
            assert.deepStrictEqual(GetImportance(employees, id), test.expected)
        })
    })
})
