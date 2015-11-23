import fs from 'fs'
import { promisifyAll } from 'bluebird'

module.exports = promisifyAll(fs)
