let Hapi = require('hapi');
let server = new Hapi.Server();

//console.log(process.argv[3])
    
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});



server.route(


{
	path: '/{name}',
	method:'GET',
	handler: function(request, reply){

		reply("Hello "+ request.params.name);
	}
}


);



server.start(function () {
     console.log('Server running at:', server.info.uri);
});






// Routing with hapi:
// https://www.youtube.com/watch?v=Jr2Z6Ygkz64