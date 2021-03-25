const fs = require('fs')
const readlineSync = require('readline-sync')

let file = process.argv[2]
let fileCopy = process.argv[3]
let inputNewCopyFileName = ''

if (process.argv.length < 4) {
  console.log("usage (invalid number argument): node cp.js file copyFileName")
  process.exit(1)
}

if (!fs.existsSync(file)) {
  console.log(`Error: ${file} does not exist`)
  process.exit(1)
}

if (fs.existsSync(fileCopy)) {
  fileCopy = inputNewCopyFileName = readlineSync.question(`${file} existe déja !!\nchoisissez un autre nom de fichier : `)
}

const stats = fs.statSync(file)

if (!stats.isFile()) {
  console.log(`Error: ${file} is not a file`)
  process.exit(1)
}

fs.copyFileSync(`./${file}`, `./${fileCopy}`)
