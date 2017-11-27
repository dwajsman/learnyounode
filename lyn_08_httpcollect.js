const http = require("http");
const bl = require("bl");
//let arr = [];




http.get(process.argv[2], callback);

// IMPORTANT: file:///usr/local/lib/node_modules/learnyounode/docs/bl.html

function callback (response) {

	response.pipe(bl(function (err, data) {
  	console.log(data.toString().length)
  	console.log(data.toString())
	}))


}










// function callback (response) {
// 	//response.setEncoding('utf8');
// 	//console.log(response)

//   	response.pipe(bl(function(err,data){

//   		console.log(bl.length)

//   		console.log(bl.append(new buffer(data)))

//   		//console.log(data)

//   	}));
  	
//   	response.on("error", function(err){console.log(err)});
// }

