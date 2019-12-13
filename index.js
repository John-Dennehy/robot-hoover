#!/usr/bin/env node
const RobotHoover = require('./lib/robot_hoover')
const Input = require('./lib/input')

function run () {
  const hoover = new RobotHoover()
  hoover.getInstructions()
  hoover.runRoute()
}
