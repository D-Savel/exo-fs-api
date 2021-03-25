const fs = require('fs')

if (process.argv.length < 3) {
  console.log("usage (invalid number argument): node cat.js file.txt")
  process.exit(1)
}

let file = process.argv[2]

if (!fs.existsSync(file)) {
  console.log(`Error: ${file} does not exist`)
  process.exit(1)
}

const stats = fs.statSync(file)
if (!stats.isFile()) {
  console.log(`Error: ${file} is not a file`)
  process.exit(1)
}

let fileContent = fs.readFileSync(`./${file}`, 'utf8')
console.log(fileContent)
