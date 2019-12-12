import RobotHoover from '../lib/robot_hoover'

describe('RobotHoover', () => {
  beforeEach(() => {
    const grid = { x: 5, y: 5 }
    const dirtLocations = [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }]
    const initialPosition = { x: 1, y: 2 }
    const instructions = 'NNESEESWNWW'
    const hoover = new RobotHoover()
  })

  it('returns current position', () => {
    expect(hoover.location).toEqual({ x: 1, y: 2 })
  })
})
