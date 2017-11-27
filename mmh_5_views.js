let Hapi = require('hapi');
let server = new Hapi.Server();

let path = require('path');

//let Inert = require('inert');

let Vision = require('vision');


    
server.register(Vision, function (err) {
        if (err) throw err;
});



   
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});



// server.route({  
//   method: 'GET',
//    path: '/foo/bar/baz/{param}',
//   handler: {
//         directory: {path: path.join(__dirname, 'public')}
//     }
//   }); 


server.route({
    method: 'GET',
    path: '/',
    handler: {view: 'index.html'}
});




    server.views({
        engines: {
            html: require('handlebars')
        },
        path: path.join(__dirname, 'templates')
    });







server.start(function (err) {
        if (err) throw err;
});







// from mmh 
    // var Vision = require('vision');
    
    // server.register(Vision, function (err) {
    //     if (err) throw err;
    // });



    // handler: {
    //     view: "index.html"
    // }



    // server.views({
    //     engines: {
    //         html: require('handlebars')
    //     },
    //     path: Path.join(__dirname, 'templates')
    // });



    // <div>{{query.paramName}}</div>
