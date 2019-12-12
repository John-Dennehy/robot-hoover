import RobotHoover from '../lib/robot_hoover'

describe('RobotHoover', () => {
  const grid = { x: 5, y: 5 }
  const dirtLocations = [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }]
  const startPosition = { x: 1, y: 2 }
  const hoover = new RobotHoover(startPosition)

  describe('#postion', () => {
    it('returns current position', () => {
      expect(hoover.position).toEqual({ x: 1, y: 2 })
      expect(hoover.position).not.toEqual({ x: 0, y: 0 })
    })

    it('returns its location matching the inital position', () => {
      const initialPosition = { x: 0, y: 0 }
      const hoover = new RobotHoover(initialPosition)
      expect(hoover.position).toEqual({ x: 0, y: 0 })
      expect(hoover.position).not.toEqual({ x: 1, y: 2 })
    })
  })

  describe('#dirtCollected', () => {
    it('starts with zero #dirtCollected', () => {
      expect(hoover.dirtCollected).toEqual(0)
      expect(hoover.dirtCollected).not.toBeGreaterThan(0)
    })

    it('increases #dirtCollected by 1 if position is dirty', () => {
      const hoover = new RobotHoover({ x: 2, y: 2 })
      expect(hoover.dirtCollected).toEqual(0)
      hoover.setDirtyAreas(dirtLocations)
      hoover.checkForDirt()
      expect(hoover.dirtCollected).toEqual(1)
    })
  })
})
