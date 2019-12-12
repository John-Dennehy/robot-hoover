
export default class RobotHoover {
  constructor(initialPosition) {
    this.position = initialPosition
    this.dirtCollected = 0
    this.dirtyAreas = []
  }

  location() {
    return this.position
  }

  checkForDirt() {
    if (this.isDirty(this.dirtyAreas)) {
      this.dirtCollected += 1
    }
  }

  isDirty() {
    return this.dirtyAreas.some(area => area.x === this.position.x && area.y === this.position.y)
  }

  setDirtyAreas(array) {
    this.dirtyAreas = array
  }

}
