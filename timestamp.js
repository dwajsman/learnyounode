let net = require('net');
let port = process.argv[2];

let myDate = new Date();


let Ye = myDate.getFullYear()
let Mo = myDate.getMonth()+1    // starts at 0  
let Da = myDate.getDate();     // returns the day of month  
let Ho = myDate.getHours()  
let Mi = myDate.getMinutes()  





let server = net.createServer(function (socket) {  
   


//console.log(Ye +' '+ Mo  +' '+ Da +' '+ Ho +' '+ Mi)





socket.write('a');

socket.end();

});



server.listen(port);

  



