let Hapi = require('hapi');
let server = new Hapi.Server();

//let H2o2 = require('h2o2');

let path = require('path');

let Vision = require('vision');


    
server.register(Vision, function (err) {
        if (err) throw err;
});



   
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});






    server.views({
        engines: {
            html: require('handlebars')
        },
        path: path.join(__dirname, 'templates'),

        helpersPath:  path.join(__dirname, 'helpers')
    });


//https://hapijs.com/tutorials/views    
// server.views({
//     engines: {
//         html: require('handlebars')
//     },
//     relativeTo: __dirname,
//     path: './templates',
//     layoutPath: './templates/layout',
//     helpersPath: './templates/helpers'
// });




    // var options = {
    //     views: {
    //         ...
    //         helpersPath: 'helpers'
    //     }
    // };



    // server.views({
    //     engines: {
    //         html: require('handlebars')
    //     },
    //     path: path.join(__dirname, 'templates')
    // });








server.route({
    method: 'GET',
    // path: '/proxy',
    path: '/',

    handler: {view: 'template.html'}

    
    
});






server.start(function (err) {
        if (err) throw err;
});



