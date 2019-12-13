// import fs from 'fs'
const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)

export default async function getInput (filePath = '../input.txt') {
  try {
    const content = await readFile(filePath, 'utf8')
    console.log(content)
    return content
  } catch (err) {
    console.error(err)
  }
}
