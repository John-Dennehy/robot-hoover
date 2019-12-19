#!/usr/bin/env node
const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)
const RobotHoover = require('./lib/robot_hoover')

async function startHoover(filePath = './input.txt') {
  try {
    const hoover = new RobotHoover()
    const fileContent = await readFile(filePath, 'utf8')
    console.log(`Reading instructions from ${filePath}`, '\n' + fileContent)
    hoover.setInstructions(fileContent)
    console.log(hoover)
    return hoover
  } catch (err) {
    console.error(err)
  }
}

function createInstructions(fileContent) {

}

function start() {
  console.log('Started...')
  const hoover = startHoover()
  console.log(hoover)
  // console.log('Following route')
  // hoover.runRoute()
  // console.log('Finished')
}

start()
