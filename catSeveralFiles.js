const fs = require('fs')

let fileContent = ''

if (process.argv.length < 3) {
  console.log("usage (at least one argument): node cat.js file1.txt file2.txt file3.txt ...")
  process.exit(1)
}
let fileArray = process.argv.slice(2,)

for (const file of fileArray) {
  if (!fs.existsSync(file)) {
    console.log(`Error: ${file} does not exist`)
    process.exit(1)
  }
  const stats = fs.statSync(file)
  if (!stats.isFile()) {
    console.log(`Error: ${file} is not a file`)
    process.exit(1)
  }
}

for (const elem of fileArray) {
  fileContent = fs.readFileSync(`./${elem}`, 'utf8')
  console.log(fileContent)
  console.log("\n##########\n")
}
