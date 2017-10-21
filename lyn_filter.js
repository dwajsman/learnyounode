const fs = require('fs'); 
const myUrl = process.argv[2];
const myExt = ("."+process.argv[3]);

//let a = fs.readFileSync(fileUrl);



let sum = 0;

fs.readdir(process.argv[2], (err, data) => {


	//console.log(data); 

for(i in data) {
// console.log(data[i]);

//  https://stackoverflow.com/questions/3480771/how-do-i-check-if-string-contains-substring
if (data[i].includes(myExt)){

	console.log(data[i]);

}


}






 //     if(err){
 //     	throw err;
 //     } 

 //     let array = data.toString().split("\n");
    
 //     for(i in array) {


 //     	//console.log(array[i]); 
 //     	//console.log("sssss"); 
 //        sum = sum +1;
 //     }

    // log();
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








