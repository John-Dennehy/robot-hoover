import RobotHoover from '../lib/robot_hoover'

describe('RobotHoover', () => {
  const hoover = new RobotHoover()

  describe('#setRoomDimensions', () => {
    it("returns {x: 5, y: 5} when passed '5 5'", () => {
      const dimension = hoover.setRoomDimensions('5 5')
      expect(dimension.x).toEqual(5)
      expect(dimension.y).toEqual(5)
    })

    it("returns {x: 2, y: 3} when pass '2 3'", () => {
      const dimension = hoover.setRoomDimensions('2 3')
      expect(dimension.x).toEqual(2)
      expect(dimension.y).toEqual(3)
      expect(dimension.x).not.toEqual(5)
      expect(dimension.y).not.toEqual(5)
    })
  })

  describe('#setInitialPostion', () => {
    it("returns {x: 1, y: 2} when passed '1 2'", () => {
      const position = hoover.setInitialPosition('1 2')
      expect(position).toEqual({ x: 1, y: 2 })
      expect(position).not.toEqual({ x: 0, y: 0 })
    })

    it("returns {x: 1, y: 2} when passed '1 2'", () => {
      const position = hoover.setInitialPosition('1 2')
      expect(position).not.toEqual({ x: 0, y: 0 })
      expect(position).toEqual({ x: 1, y: 2 })
    })
  })

  // describe('#dirtCollected', () => {
  //   it('starts with zero #dirtCollected', () => {
  //     expect(hoover.dirtCollected).toEqual(0)
  //     expect(hoover.dirtCollected).not.toBeGreaterThan(0)
  //   })

  //   it('increases #dirtCollected by 1 if position is dirty', () => {
  //     expect(hoover.dirtCollected).toEqual(0)
  //     hoover.setDirtyPatches('2 1')
  //     hoover.moveTo({ x: 2, y: 1 })
  //     hoover.checkForDirt()
  //     expect(hoover.dirtCollected).toEqual(1)
  //   })
  // })
})
