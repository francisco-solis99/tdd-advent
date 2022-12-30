import { describe, it, expect } from 'vitest'
import dryNumber from '../challengue18'
/*
- Write a function that receives the number we don't have ink for (a number between 0 and 9).
- As a second parameter, the number of barcodes to print (we start from 1 to the number we receive).
- It should return an array with the numbers that include the number we don't have ink for
- The number we don't have ink for can only be between 0 and 9.
- The number we don't have ink for can be in any position of the barcode.
- The number of barcodes to print can be very large.

*/

describe('dryNumber', () => {
  // Innecesary until the pint that I finished the challengue
  // it('should be a function', () => {
  //   expect(typeof dryNumber).toBe('function')
  // })

  it('should throw an error if the first paremeter is not a number', () => {
    expect(() => dryNumber()).toThrow()
    expect(() => dryNumber('as')).toThrow()
  })

  it('should throw an error if the first paremeter is NaN', () => {
    expect(() => dryNumber(NaN)).toThrow()
  })

  it('should throw an error if the second paremeter is not a number', () => {
    expect(() => dryNumber(2)).toThrow()
    expect(() => dryNumber(2, 'as')).toThrow()
  })

  it('should throw an error if the first parameter is not between 0 and 9', () => {
    expect(() => dryNumber(12, 20)).toThrow()
    expect(() => dryNumber(10)).toThrow()
    expect(() => dryNumber(100)).toThrow()
  })

  it('should returnan array with the numbers that include the number we do not have ink for ', () => {
    expect(dryNumber(1, 15)).toStrictEqual([1, 10, 11, 12, 13, 14, 15])
    expect(dryNumber(2, 20)).toStrictEqual([2, 12, 20])
    expect(dryNumber(5, 55)).toStrictEqual([
      5,
      15,
      25,
      35,
      45,
      50,
      51,
      52,
      53,
      54,
      55
    ])
  })
})
