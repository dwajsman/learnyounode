const http = require('http');

const url = require('url');

const port = process.argv[2];


//let myUrl = url.parse('/api/parsetime', true)





//console.log(myUrl);



let server = http.createServer(function (req, res) {  
     
//   res.writeHead(200, { 'Content-Type': 'application/json' })  
     
    if (req.method == "GET") {
			console.log('aaa')
    }

});
server.listen(port);



//ANSWER   
   //   {  
   //     "hour": 14,  
   //     "minute": 23,  
   //     "second": 15  
   //   }  
   // 


 //https://stackoverflow.com/questions/9577611/http-get-request-in-node-js-express