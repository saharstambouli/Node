const fs = require('fs')

//create new file
 fs.appendFile('welcome.txt',"Hello Node", function (err) {
     err ? console.log('err', err) : console.log("saved")
 })


//read file async

fs.readFile('./welcome.txt' , (err , data)=>{
    err ? console.log('err', err) : console.log('data', data.toString())
}) 
