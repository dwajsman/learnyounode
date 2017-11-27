let http = require('http');

//console.log(http.get(process.argv[2]))


http.get(process.argv[2], callback);

function callback (response) {
	response.setEncoding('utf8');
  	response.on("data", function(data){console.log(data)});
  	response.on("error", function(err){console.log(err)});
}


//callback(http.get(process.argv[2]));