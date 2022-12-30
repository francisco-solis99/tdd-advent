import { describe, it, expect } from 'vitest'
import sortToys from '../challengue19'

/*
- The first is an array of toys, and the second is an array of numbers that indicate the position of each toy in the warehouse.
- The positions may not start at 0, although they will always be consecutive numbers and in ascending order.
- Return an array where each toy is in the position it corresponds to.
*/

describe('sortToys', () => {
  it('should sortToys a function', () => {
    expect(typeof sortToys).toBe('function')
  })

  it('should throw an error if the first parameter is not an array', () => {
    expect(() => sortToys()).toThrow()
  })

  it('should throw an error if the second parameter is not an array', () => {
    expect(() => sortToys(['ball'])).toThrow()
  })

  it('return an array where each toy is in the correspondinbg position', () => {
    expect(sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0])).toStrictEqual(['puzzle', 'car', 'ball', 'doll'])
    expect(sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])).toStrictEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo'])
  })
})
