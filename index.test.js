const output = require('./index')

test('returns current coordinates and count of dirt cleaned', () => {
  const x = 1
  const y = 3
  const count = 1
  console.log('1 3\n1')
  expect(output(x, y, count)).toEqual('1 3\n1')
})
