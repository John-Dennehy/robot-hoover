import Input from '../lib/input'

describe('Input', () => {
  describe('#convertDirections', () => {
    const input = new Input()

    it("returns size of the grid as an object", () => {
      expect(input.grid).toEqual({ x: 5, y: 5 })
    })

  })

})
