//console.log(process.argv[2]);
//console.log(process.argv[3]);


const http = require('http');

const fs = require('fs');

const port = process.argv[2];

const location = process.argv[3];


let server = http.createServer(function (req, res) {  
      //console.log(res);

      fs.createReadStream(location).pipe(res);
})  
server.listen(port) 