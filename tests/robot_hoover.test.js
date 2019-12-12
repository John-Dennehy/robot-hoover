import RobotHoover from '../lib/robot_hoover'

describe('RobotHoover', () => {
  const grid = { x: 5, y: 5 }
  const dirtLocations = [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }]
  const initialPosition = { x: 1, y: 2 }
  const instructions = 'NNESEESWNWW'
  const hoover = new RobotHoover(initialPosition)

  it('returns current position', () => {
    expect(hoover.location()).toEqual({ x: 1, y: 2 })
  })

  it('does not return a different position', () => {
    expect(hoover.location()).not.toEqual({ x: 10, y: 6 })
  })
})
