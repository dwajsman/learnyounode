
//READING: 
//https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc

// Very good \/ \/ \/ 
//http://exploringjs.com/es6/ch_modules.html
// yes! use this one for everything :) 


//EARLY TEST ++ W
// function adda(a,b) {
// 	return a+b;
// }

// module.exports = {
//    adda: adda,
// };
//EARLY TEST -- W




let fs = require('fs');

let arr = [];
//LYN make it modular ++

//the directory name, the filename extension string and a callback function

//module.exports = checkDir = (dir, ext, cb) => {

module.exports = (dir, ext, callback) => {


	fs.readdir(dir, 'utf8', (err, data) => {
		
		if(err)
			return callback(err);
		let count = 0;
		for(i in data){
			if (data[i].includes("."+ext)){
				//console.log(data[i]);
				arr[count]= data[i];
				count++

			}
		}

		 callback(null, arr);

	});

	
}

 // module.exports = {
 
 //   checkDir: checkDir

 // };

//LYN make it modular -- 



