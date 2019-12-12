
export default class RobotHoover {
  constructor (initialPosition) {
    this.position = initialPosition
    this.dirtCollected = 0
    this.dirtyAreas = []
  }

  checkForDirt () {
    if (this.isDirty(this.dirtyAreas)) {
      this.dirtCollected += 1
    }
  }

  isDirty () {
    const xPos = this.position.x
    const yPos = this.position.y
    return this.dirtyAreas.some(area => area.x === xPos && area.y === yPos)
  }

  setDirtyAreas (array) {
    this.dirtyAreas = array
  }
}
