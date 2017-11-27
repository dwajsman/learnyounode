const http = require('http');

const map = require('through2-map');

const port = process.argv[2];

const location = process.argv[3];


let server = http.createServer(function (req, res) {  
     
     
     if (req.method == 'POST') {

     	//console.log(req);


     	req.pipe(map(function (chunk) {  
       			return chunk.toString().toUpperCase('')
		})).pipe(res)  

//Original
//req.pipe(map(function (chunk) {  
//       	return chunk.toString().split('').reverse().join('')  
//})).pipe(res)  


     }

       

      //fs.createReadStream(location).pipe(res);
})  
server.listen(port) 





   
