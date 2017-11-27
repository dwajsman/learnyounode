const http = require('http');

const url = require('url');

const port = process.argv[2];

//const location = process.argv[3];


//let myUrl = url.parse('/api/parsetime', true)




// var req = http.get(options, function(res) {
//   console.log('STATUS: ' + res);
//   //console.log('HEADERS: ' + JSON.stringify(res.headers));

//   // Buffer the body entirely for processing as a whole.
//   // var bodyChunks = [];
//   // res.on('data', function(chunk) {
//   //   // You can process streamed parts here...
//   //   bodyChunks.push(chunk);
//   // }).on('end', function() {
//   //   var body = Buffer.concat(bodyChunks);
//   //   console.log('BODY: ' + body);
//   //   // ...and/or process the entire body here.
//   // })
// });



//console.log(myUrl);





let server = http.createServer(function (req, res) {  
     
     
     if (req.method == 'GET') {
	//console.log('aaa')
let myUrl = url.parse(req.url, true)
//console.log(myUrl)

//   path: '/api/parsetime?iso=2017-11-12T09:24:50.353Z'
let h = Number(myUrl.path.substr(30, 2));
let m = Number(myUrl.path.substr(33, 2));
let s = Number(myUrl.path.substr(36, 2));
// console.log(hour)
// console.log(minute)
// console.log(second)


let answer = {

	hour: h,
	minute: m,
	second: s

}


res.end(JSON.stringify(answer))



let dateA = new Date(myUrl.query.iso)

let unixtime = dateA.getTime();

let unixanswer = {"unixtime": unixtime}

//res.end(unixanswer)

console.log(unixanswer)


    }


//res.writeHead(200, { 'Content-Type': 'application/json' })  





});

server.listen(port) 


// console.log(myUrl) 
// vvvvvvvvvvvvvvvvvv
// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?iso=2017-11-12T09:24:50.353Z',
//   query: { iso: '2017-11-12T09:24:50.353Z' },
//   pathname: '/api/parsetime',
//   path: '/api/parsetime?iso=2017-11-12T09:24:50.353Z',
//   href: '/api/parsetime?iso=2017-11-12T09:24:50.353Z' }





//ANSWER   
   //   {  
   //     "hour": 14,  
   //     "minute": 23,  
   //     "second": 15  
   //   }  
   // 


 //https://stackoverflow.com/questions/9577611/http-get-request-in-node-js-express