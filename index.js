#!/usr/bin/env node
const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)
// const RobotHoover = require('./lib/robot_hoover')

let roomDimensions = { x: 0, y: 0 }
let hooverPosition = { x: 0, y: 0 }
const dirtCollected = []
let dirtyPatches = []
let route = []

startHoover()

async function startHoover(filePath = './input.txt') {
  try {
    const fileContent = await readFile(filePath, 'utf8')
    console.log(`Reading instructions from ${filePath}`, '\n' + fileContent)
    setInstructions(fileContent)
    runRoute()
    output(hooverPosition.x, hooverPosition.y, dirtCollected)
    console.log()
  } catch (err) {
    console.error(err)
  }
}

function setInstructions(data) {
  const dataArray = data.toString().split('\n')
  console.log('Data from input: ', dataArray)
  setRoomDimensions(dataArray.shift())
  setInitialPosition(dataArray.shift())
  setRoute(dataArray.pop())
  setDirtyPatches(dataArray)
}

function setRoomDimensions(roomData) {
  const array = roomData.split(' ')
  const dimensions = { x: Number(array[0]), y: Number(array[1]) }
  roomDimensions = dimensions
  return dimensions
}

function setInitialPosition(positionData) {
  const array = positionData.split(' ')
  hooverPosition = { x: Number(array[0]), y: Number(array[1]) }
  return hooverPosition
}

function setRoute(routeData) {
  route = routeData.split('')
  return route
}

function runRoute() {
  if (route.length > 0) {
    route.forEach(function (direction) {
      move(direction)
    })
  }
}

function move(direction) {
  switch (direction) {
    case 'N':
      hooverPosition.y += 1
      break
    case 'S':
      hooverPosition.y -= 1
      break
    case 'E':
      hooverPosition.x += 1
      break
    case 'W':
      hooverPosition.x -= 1
      break
    default:
      break
  }
  hooverPosition = checkForWall(hooverPosition)
  console.log(hooverPosition)
  vacuum()
  return hooverPosition
}

function vacuum() {
  if (isDirty()) {
    const index = dirtyPatches.indexOf(hooverPosition)
    const vacuumedPatch = dirtyPatches.splice(index, 1)
    dirtCollected.push(vacuumedPatch)
  }
}

function checkForWall(newPosition) {
  let xPos = newPosition.x
  let yPos = newPosition.y
  const xDim = roomDimensions.x
  const yDim = roomDimensions.y
  if (xPos < 0) { xPos = 0 }
  if (yPos < 0) { yPos = 0 }
  if (xPos > xDim) { xPos = xDim }
  if (yPos > yDim) { yPos = yDim }

  return { x: xPos, y: yPos }
}

function isDirty() {
  const xPos = hooverPosition.x
  const yPos = hooverPosition.y
  return dirtyPatches.some(area => area.x === xPos && area.y === yPos)
}

function setDirtyPatches(array) {
  dirtyPatches = array
  return array
}

function output(x, y, dirtArray) {
  const dirtCount = dirtArray.length
  const outputString = x + ' ' + y + '\n' + dirtCount
  console.log('Output:', '\n' + outputString)
  return outputString
}
