const fs = require('fs')
const readlineSync = require('readline-sync')

let fileContent = ''
let newContent = ''

if (process.argv.length < 4) {
  console.log("usage (at least two arguments): node append.js file1.txt CopyFileName.txt\nOr: node append.js file1.txt file1.txt ... CopyFileName.txt ")
  process.exit(1)
}
let fileArray = process.argv.slice(2,)
let copyFileName = fileArray.pop()

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

if (fs.existsSync(copyFileName)) {
  copyFileName = inputNewCopyFileName = readlineSync.question(`${copyFileName} existe déja !!\nchoisissez un autre nom de fichier : `)
}

for (const elem of fileArray) {
  fileContent = fs.readFileSync(`./${elem}`, 'utf8')
  newContent += fileContent
}

fs.writeFileSync(`./${copyFileName}`, newContent, 'utf8')
