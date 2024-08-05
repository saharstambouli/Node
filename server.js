const http = require('http')


 const reqListner = function(req,res){
    if (req.url === "/") { 
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1> Hello Node !! </h1> ')
        res.end()

    }
 
 }

 const server = http.createServer(reqListner)

 server.listen(3000, (err)=>{
    err ? console.log('err', err) : console.log("Hello Node!!!!")
})
