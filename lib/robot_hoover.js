const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)
const getInput = require('./input')

class RobotHoover {
  constructor(instructions) {
    this.roomDimensions = { x: 0, y: 0 }
    this.position = { x: 0, y: 0 }
    this.dirtCollected = []
    this.dirtyPatches = []
    this.route = []
  }

  getInstructions(filePath = './input.txt') {
    const input = getInput(filePath)
    const dataArray = input.toString().split('\n')
    console.log('Data from input: ', dataArray)
    this.setRoomDimensions(dataArray.shift())
    this.setInitialPosition(dataArray.shift())
    this.setRoute(dataArray.pop())
    this.setDirtyPatches(dataArray)
  }

  setRoomDimensions(roomData) {
    const array = roomData.split(' ')
    const dimensions = { x: Number(array[0]), y: Number(array[1]) }
    this.roomDimensions = dimensions
    return dimensions
  }

  setInitialPosition(positionData) {
    const array = positionData.split(' ')
    const position = { x: Number(array[0]), y: Number(array[1]) }
    this.position = position
    return position
  }

  setRoute(routeData) {
    const route = routeData.split('')
    this.route = route
    return route
  }

  runRoute() {
    if (this.route.length > 0) {
      this.move(this.route.shift)
      this.runRoute()
    }
  }

  move(direction) {
    const position = this.position
    switch (direction) {
      case 'N':
        position.y += 1
        break
      case 'S':
        position.y -= 1
        break
      case 'E':
        position.x += 1
        break
      case 'W':
        position.x -= 1
        break
      default:
        break
    }
    this.position = this.checkForWall(position)
    this.hoover()
    console.log(position)
    return position
  }

  hoover() {
    if (this.isDirty()) {
      const index = this.dirtyPatches.indexOf(this.position)
      const cleanedPatch = this.dirtyPatches.splice(index, 1)
      this.dirtCollected.push(cleanedPatch)
    }
  }

  checkForWall(newPosition) {
    let xPos = newPosition.x
    let yPos = newPosition.y
    const xDim = this.roomDimensions.x
    const yDim = this.roomDimensions.y
    if (xPos < 0) { xPos = 0 }
    if (yPos < 0) { yPos = 0 }
    if (xPos > xDim) { xPos = xDim }
    if (yPos > yDim) { yPos = yDim }

    return { x: xPos, y: yPos }
  }

  isDirty() {
    const xPos = this.position.x
    const yPos = this.position.y
    return this.dirtyPatches.some(area => area.x === xPos && area.y === yPos)
  }

  setDirtyPatches(array) {
    this.dirtyPatches = array
    return array
  }
}

module.exports.RobotHoover
