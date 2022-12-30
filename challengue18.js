
function dryNumber (dry, numbers) {
  if (Number.isNaN(dry)) throw new Error('paremeter provided must be a number')
  if (typeof dry !== 'number') throw new Error('paremeter provided must be a number')
  if (typeof numbers !== 'number') throw new Error('paremeter provided must be a number')
  if (dry > 9 || dry < 0) throw new Error('parameter nmust be between 0 and 9')

  const listNumbers = [...Array(numbers).keys()]
  const regex = new RegExp(dry)
  return listNumbers.filter(num => regex.test(num + 1)).map(num => num + 1)
}

export default dryNumber
