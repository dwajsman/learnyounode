

//EARLY TEST ++ W
//let req = require('./lyn_mod01_add.js');
// let aa = 2;
// let bb = 4;

// let c = req.adda(aa,bb);

// console.log(c);
//EARLY TEST -- W


//LYN make it modular ++

let req = require('./lyn_mod01_mod.js');
//let fs = require('fs');

//req.modulae(process.argv[2],process.argv[3],"a")

//console.log(process.argv[2]);

// video about Callback - NodeJS
//https://www.youtube.com/watch?v=U8SS7Njn9yQ




// fs.readdir( process.argv[2],'utf8', function(err, path) {
	
// 	console.log(path);

// });



//function (dir, ext, cb)

let cbFunction = function (err, data) {

if (err) {
	return console.log("Error!")
}

for(i in data){
	
    console.log(data[i]);
}

}

req(process.argv[2],process.argv[3], cbFunction);




//LYN make it modular -- 



// Data Example
// [ '/usr/local/bin/node',
//   '/Users/d13/Dropbox/000_Langara/Term3/learnyounode/lyn_modular/lyn_mod01_main.js',
//   '/var/folders/fb/pl80tfbs5g5cjltv8qp7jt040000gn/T/_learnyounode_3751',
//   'md' ]