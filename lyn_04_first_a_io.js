const fs = require('fs'); 
const fileUrl = process.argv[2];

//let a = fs.readFileSync(fileUrl);



let sum = 0;

//https://stackoverflow.com/questions/6831918/node-js-read-a-text-file-into-an-array-each-line-an-item-in-the-array
fs.readFile(process.argv[2], function(err, data) {


	//console.log(data); 
     if(err){
     	throw err;
     } 

     let array = data.toString().split("\n");
    
     for(i in array) {


     	//console.log(array[i]); 
     	//console.log("sssss"); 
        sum = sum +1;
     }

     log();
});



// for(i in b) {
//     //console.log(b[i]);
//     sum = sum +1;
// }


// //console.log(a);

function log(){
 console.log(sum-1); 
}
// //console.log(b.length); 