console.log("Hello World")
const {generateRandomPassword} = require('./passwordgeneratorno')

const password = generateRandomPassword(10)

console.log('password', password)