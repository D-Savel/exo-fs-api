if (process.argv.length < 3) {
  console.log("usage (invalid number argument): echo.js one parameter at least")
  process.exit(1)
}
let stringTerminal = process.argv.slice(1,)

console.log(stringTerminal.join(' '))
