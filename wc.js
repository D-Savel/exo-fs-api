const fs = require('fs')

if (process.argv.length < 4) {
  console.log("usage (invalid number argument): node wc.js file.txt")
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

const lineNumber = (file) => {
  let fileContent = fs.readFileSync(`./${file}`, 'utf8')
  let fileContentTab = fileContent.split('\n')
  console.log(`le fichier ${file} contient ${fileContentTab.length} ligne${fileContentTab.length === 1 ? "" : "s"}`)
}

const charNumber = (file) => {
  let nbChar = 0
  let fileContent = fs.readFileSync(`./${file}`, 'utf8')
  for (const char of fileContent) {
    nbChar++
  }
  console.log(`le fichier ${file} contient ${nbChar} caractère${nbChar === 1 ? "" : "s"}`)
}

const wordNumber = (file) => {
  let nbWord = 0
  let fileContent = fs.readFileSync(`./${file}`, 'utf8').replaceAll('\n', ' ')
  for (const word of fileContent.split(' ')) {
    nbWord++
  }
  console.log(`le fichier ${file} contient ${nbWord} mot${nbWord === 1 ? "" : "s"}`)
}

lineNumber(file)
wordNumber(file)
charNumber(file)
