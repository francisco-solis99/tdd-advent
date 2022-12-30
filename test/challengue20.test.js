import { describe, it, expect } from 'vitest'
import printTable from '../challnegue21'

/*
- Given an array of objects with the names of the gifts and their quantities.
- Write a function that receives this array and returns a string with the drawn table.
- As you can see, the size of the cells depends on the length of the names of the gifts and the quantities
- although they will at least have to be the space of the titles Gift and Quantity respectively.
- The table uses the symbols: + for the top border, * for the bottom border, - for the horizontal lines and | for the vertical lines.
*/

describe('printTable', () => {
  it('should printTable be a function', () => {
    expect(typeof printTable).toBe('function')
  })

  it('should throw an error if the parameter is not an array', () => {
    expect(() => printTable()).toThrow()
    expect(() => printTable(2)).toThrow()
    expect(() => printTable('hola')).toThrow()
  })

  it('should throw an error if the parameter is an array but all the elements are not objects with name and quantity', () => {
    expect(() => printTable([2, 3, 4])).toThrow()
    expect(() => printTable(['as', 3])).toThrow()
    expect(() => printTable([{ name: 'bike' }])).toThrow()
    expect(() => printTable([{ quantity: 'bike' }])).toThrow()
  })

  it('should return the top border, the titles and the bottom border', () => {
    expect(printTable([
      { name: 'PlayStation 5', quantity: 9234782374892 },
      { name: 'Book Learn Web Dev', quantity: 23531 }
    ])).toBe('++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************')
  })

  it('should return the top border, the titles and the bottom border', () => {
    expect(printTable([
      { name: 'Game', quantity: 2 },
      { name: 'Bike', quantity: 1 },
      { name: 'Book', quantity: 3 }
    ])).toBe('+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************')
  })
})
