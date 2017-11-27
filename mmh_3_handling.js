let Hapi = require('hapi');
let server = new Hapi.Server();

let path = require('path');

let Inert = require('inert');





    
server.register(Inert, function (err) {
        if (err) throw err;
});



// server.register({  
//   register: require('inert')
// }, function(err) {
//   if (err) throw err

//   server.start(function(err) {
//     console.log('Server started at: ' + server.info.uri)
//   })
// })




   
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});



server.route({  
  method: 'GET',
  path: '/',
  handler: {file:('index.html')}
  }); 









server.start(function () {
     console.log('Server running at:', server.info.uri);
});



// How to serve static files
// https://www.youtube.com/watch?v=S7RHMn_iWt8