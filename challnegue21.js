function printTable (gifts) {
  if (!Array.isArray(gifts)) throw new Error('paremetr must be an array')
  const isCorrectArray = gifts.every(gift => Object.prototype.hasOwnProperty.call(gift, 'name') && Object.prototype.hasOwnProperty.call(gift, 'quantity'))
  if (!isCorrectArray) throw new Error('array must has objects with name and quantity as them properties')

  const lengthsGifts = gifts.map(gift => gift.name.length)
  const lengthsQuantity = gifts.map(gift => gift.quantity.toString().length)
  const maxLengthGifts = Math.max(...lengthsGifts, 'Gift'.length)
  const maxLengthQuantity = Math.max(...lengthsQuantity, 'Quantity'.length)
  const totalTableWidth = maxLengthGifts + maxLengthQuantity + 7

  const top = '+'.repeat(totalTableWidth)
  const bottom = '*'.repeat(totalTableWidth)
  const separation = `| ${'-'.repeat(maxLengthGifts)} | ${'-'.repeat(maxLengthQuantity)} |`
  const titles = `| ${'Gift'.padEnd(maxLengthGifts)} | ${'Quantity'.padEnd(maxLengthQuantity)} |`
  const content = gifts.map(({ name, quantity }) => {
    return `| ${name.padEnd(maxLengthGifts)} | ${quantity.toString().padEnd(maxLengthQuantity)} |`
  })

  return `${top}\n${titles}\n${separation}\n${content.join('\n')}\n${bottom}`
}

export default printTable
