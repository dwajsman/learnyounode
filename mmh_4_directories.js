let Hapi = require('hapi');
let server = new Hapi.Server();

let path = require('path');

let Inert = require('inert');


    
server.register(Inert, function (err) {
        if (err) throw err;
});



   
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});



server.route({  
  method: 'GET',
   path: '/foo/bar/baz/{param}',
  handler: {
  	    directory: {path: path.join(__dirname, 'public')}
  	}
  }); 


//mmh 
    // handler: {
    //     directory: { path: './public' }
    // }


//mmh
    // path: "/path/to/somewhere/{param}"










server.start(function () {
     console.log('Server running at:', server.info.uri);
});
