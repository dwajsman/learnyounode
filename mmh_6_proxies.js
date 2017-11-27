let Hapi = require('hapi');
let server = new Hapi.Server();

let H2o2 = require('h2o2');

//let Inert = require('inert');

//let Vision = require('vision');


    
server.register(H2o2, function (err) {
        if (err) throw err;
});



   
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});




server.route({
    method: 'GET',
    path: '/proxy',

    handler: {
        proxy: {
            host: '127.0.0.1',
            port: 65535
        }
    }
    
});




    // server.views({
    //     engines: {
    //         html: require('handlebars')
    //     },
    //     path: path.join(__dirname, 'templates')
    // });







server.start(function (err) {
        if (err) throw err;
});



// mmh


//     var H2o2 = require('h2o2');
    
//     server.register(H2o2, function (err) {
//         if (err) throw err;
//     });

// The proxy key can be used to generate a reverse proxy handler.

//     handler: {
//         proxy: {
//             host: '127.0.0.1',
//             port: 65535
//         }
//     }


