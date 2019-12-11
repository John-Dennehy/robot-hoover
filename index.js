
export function output(x, y, dirtCount) {
  const outputString = x + ' ' + y + '\n' + dirtCount
  console.log(outputString)
  return outputString
}

export function isDirty(position, dirtPositions) {
  return true
}
