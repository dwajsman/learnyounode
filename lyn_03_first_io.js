const fs = require('fs'); 
const fileUrl = process.argv[2];

let a = fs.readFileSync(fileUrl);


//https://stackoverflow.com/questions/2952805/count-number-of-lines-in-csv-with-javascript
//let lines = a("\n").length;

//https://stackoverflow.com/questions/12114922/how-to-get-the-number-of-lines-in-txt-file-data-using-jquery
//var rows = a.split('\n'); 

//https://stackoverflow.com/questions/6831918/node-js-read-a-text-file-into-an-array-each-line-an-item-in-the-array
let b = a.toString().split("\n");

let sum = 0;

for(i in b) {
    //console.log(b[i]);
    sum = sum +1;
}


//console.log(a);
console.log(sum-1); 
//console.log(b.length); 