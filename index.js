
export function output(x, y, dirtCount) {
  const outputString = x + ' ' + y + '\n' + dirtCount
  console.log(outputString)
  return outputString
}

export function isDirty(coords, dirtPositions) {
  let output = false
  dirtPositions.forEach(function (value) {
    if (value.x === coords.x && value.y === coords.y) {
      output = true
    }
  })
  return output
}
