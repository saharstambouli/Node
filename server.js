const http = require('http')


 const reqListner = function(req,res){
     res.writeHead(200)
     res.end('Hello Node ')
 }

 const server = http.createServer(reqListner)

 server.listen(3000, (err)=>{
    err ? console.log('err', err) : console.log("Hello Node!!!!")
})


//read file async

fs.readFile('./welcome.txt' , (err , data)=>{
    err ? console.log('err', err) : console.log('data', data.toString())
}) 
