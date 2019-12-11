import * as index from './index.js'

test('returns current coordinates and count of dirt cleaned', () => {
  const x = 1
  const y = 3
  const count = 1
  console.log('1 3\n1')
  expect(index.output(x, y, count)).toEqual('1 3\n1')
})

test('returns true if coords passed are dirty', () => {
  const dirtPositions = [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }]
  const checkPosition = { x: 2, y: 2 }
  expect(index.isDirty(checkPosition, dirtPositions)).toEqual(true)
})
