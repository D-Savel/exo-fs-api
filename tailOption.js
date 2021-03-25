const { Console } = require('console')
const fs = require('fs')

if (process.argv.length > 4 || process.argv.length < 3) {
  console.log("usage (invalid number argument): node tailOption.js option: -nbLines file.txt")
  process.exit(1)
}

let nbLine = process.argv[2].slice(1)

if (isNaN(nbLine)) {
  console.log(`invalid argument: The arg 1(-nbLines) = ${process.argv[2]} is not a number`)
  process.exit(1)
}
if ((process.argv[2].slice(0, 1)) !== '-') {
  console.log(`invalid argument: l'option doit comporter un - avant le nombre`)
  process.exit(1)
}

let file = process.argv[3]


if (!fs.existsSync(file)) {
  console.log(`Error: ${file} does not exist`)
  process.exit(1)
}

const stats = fs.statSync(file)
if (!stats.isFile()) {
  console.log(`Error: ${file} is not a file`)
  process.exit(1)
}

const tailNumberEndLine = (nbLine) => {
  let fileContent = fs.readFileSync(`./${file}`, 'utf8')
  let fileContentTab = fileContent.split('\n')
  fileContentTab = fileContentTab.slice(-nbLine)
  let NewContentFile = ''
  for (const elem of fileContentTab) {
    NewContentFile += `${elem}\n`
  }
  console.log(NewContentFile)
}

tailNumberEndLine(nbLine)
