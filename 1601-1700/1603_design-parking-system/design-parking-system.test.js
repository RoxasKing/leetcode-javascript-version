import { ParkingSystem } from './design-parking-system.js'
import assert from 'assert'

describe('ParkingSystem()', () => {
    let ps = new ParkingSystem(1, 1, 0)

    it(`ps.addCar(1) === true`, () => {
        assert.deepStrictEqual(ps.addCar(1), true)
    })

    it(`ps.addCar(2) === true`, () => {
        assert.deepStrictEqual(ps.addCar(2), true)
    })

    it(`ps.addCar(3) === false`, () => {
        assert.deepStrictEqual(ps.addCar(3), false)
    })

    it(`ps.addCar(1) === false`, () => {
        assert.deepStrictEqual(ps.addCar(1), false)
    })
})
