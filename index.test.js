import * as index from './index.js'

test('returns current coordinates and count of dirt cleaned', () => {
  const x = 1
  const y = 3
  const count = 1
  console.log('1 3\n1')
  expect(index.output(x, y, count)).toEqual('1 3\n1')
})

test('returns true if coords passed are dirty', () => {
  const dirtPostions = [[1, 0], [2, 2], [2, 3]]
  expect(index.isDirty(2, 2, dirtPostions)).toEqual(true)
})
