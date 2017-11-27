const http = require("http");
const bl = require("bl");



   
http.get(process.argv[2], callback);

function callback (response) {

	response.pipe(bl(function (err, data) {
  	console.log(data.toString())
	}))


	http.get(process.argv[3], callback);

	function callback (response) {

	response.pipe(bl(function (err, data) {
  	console.log(data.toString())
	}))


		http.get(process.argv[4], callback);

		function callback (response) {

		response.pipe(bl(function (err, data) {
	  	console.log(data.toString())
		}))

		}







	}






}


   




