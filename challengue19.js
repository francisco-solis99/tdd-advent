function sortToys (toys, positions) {
  if (!Array.isArray(toys)) throw new Error('Parameter must be an array')
  if (!Array.isArray(positions)) throw new Error('Parameter must be an array')
  const min = Math.min(...positions)
  const sortedToys = Array(toys.length)
  toys.forEach((toy, index) => {
    sortedToys[positions[index] - min] = toy
  })
  return sortedToys
}

export default sortToys
