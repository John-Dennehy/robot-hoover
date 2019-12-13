import getInput from './input'
export default class RobotHoover {
  constructor () {
    this.roomDimensions = { x: 0, y: 0 }
    this.position = { x: 0, y: 0 }
    this.dirtCollected = 0
    this.dirtyPatches = []
    this.route = []
  }

  getInstructions (filePath = '../input.txt') {
    const input = getInput(filePath)
    const dataArray = input.toString().split('\n')
    console.log(dataArray)
    this.setRoomDimensions(dataArray.shift())
    this.setInitialPosition(dataArray.shift())
    this.setRoute(dataArray.pop())
    this.setDirtyPatches(dataArray)
  }

  setRoomDimensions (roomData) {
    const array = roomData.split(' ')
    const dimensions = { x: Number(array[0]), y: Number(array[1]) }
    this.roomDimensions = dimensions
    return dimensions
  }

  setInitialPosition (positionData) {
    const array = positionData.split(' ')
    const position = { x: Number(array[0]), y: Number(array[1]) }
    this.position = position
    return position
  }

  setRoute (routeData) {
    const route = routeData.split()
    this.route = route
    return route
  }

  moveTo (position) {
    this.position = position
    return this.position
  }

  checkForDirt () {
    if (this.isDirty(this.dirtyPatches)) {
      this.dirtCollected += 1
    }
  }

  isDirty () {
    const xPos = this.position.x
    const yPos = this.position.y
    return this.dirtyPatches.some(area => area.x === xPos && area.y === yPos)
  }

  setDirtyPatches (array) {
    this.dirtyPatches = array
    return array
  }
}
