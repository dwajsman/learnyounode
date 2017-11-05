let net = require('net');
let port = process.argv[2];

let myDate = new Date();


let Ye = myDate.getFullYear()
let Mo = myDate.getMonth()+1    // starts at 0  
let Da = myDate.getDate();     // returns the day of month  
let Ho = myDate.getHours()  
let Mi = myDate.getMinutes()  

if (Mo <= 9){ Mo = "0"+ Mo};
if (Da <= 9){ Da = "0"+ Da};
if (Ho <= 9){ Ho = "0"+ Ho};
if (Mi <= 9){ Mi = "0"+ Mi};

//"2013-07-06 17:42" 
let useDate = Ye +'-'+ Mo  +'-'+ Da +' '+ Ho +':'+ Mi+'\n'



let server = net.createServer(function (socket) {  
   

//console.log(useDate)
socket.write(useDate);

socket.end();

});


server.listen(port);

  



