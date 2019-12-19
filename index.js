#!/usr/bin/env node
const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)
const RobotHoover = require('./lib/robot_hoover')

async function getInput(filePath = './input.txt') {
  try {
    const fileContent = await readFile(filePath, 'utf8')
    console.log(fileContent)
    createInstructions(fileContent)
  } catch (err) {
    console.error(err)
  }
}

function createInstructions(fileContent) {
  console.log('creating instructions from: ', fileContent)
}

function start() {
  console.log('Started...')
  getInput()
  // const hoover = new RobotHoover()
  // console.log('Reading input.txt file')
  // console.log('Following route')
  // hoover.runRoute()
  // console.log('Finished')
}

start()
