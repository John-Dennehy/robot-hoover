import RobotHoover from '../lib/robot_hoover'

describe('RobotHoover', () => {
  const grid = { x: 5, y: 5 }
  const dirtLocations = [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }]
  const startPosition = { x: 1, y: 2 }
  const instructions = 'NNESEESWNWW'
  const hoover = new RobotHoover(startPosition)

  it('returns current position', () => {
    expect(hoover.location()).toEqual({ x: 1, y: 2 })
    expect(hoover.location()).not.toEqual({ x: 0, y: 0 })
  })

  it('to start with zero #dirtCollected', () => {
    expect(hoover.dirtCollected()).toEqual(0)
    expect(hoover.dirtCollected()).not.toBeGreaterThan(0)
  })

  it('to increase #dirtCollected by 1 if position is dirty', () => {
    const newHoover = new RobotHoover({ x: 2, y: 2 })
    expect(newHoover.dirtCollected()).toEqual(1)
  })

  it('to return its location matching the inital position', () => {
    const initialPosition = { x: 0, y: 0 }
    const newHoover = new RobotHoover(initialPosition)
    expect(newHoover.location()).toEqual({ x: 0, y: 0 })
    expect(newHoover.location()).not.toEqual({ x: 1, y: 2 })
  })
})
