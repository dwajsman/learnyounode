let Hapi = require('hapi');
let server = new Hapi.Server();

let fs = require('fs');

let path = require('path');

let Joi = require('joi');


//console.log(process.argv[2])

//
// Nathan, 
// Have you seen that it "hints" (below) at using port 8080 but actually uses process.argv[2] ?

// 
// ##HINTS
// Create a server that listens on port 8080 with the following code:
//
   
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
   // port: Number(8080)
});






server.route({
    path: '/chickens/{parameter}',
     method: 'GET',

     config: {
        handler: (request, reply) => {
          reply('You asked for the chicken ' + request.params.parameter)},

         validate: {
             params: {
                 parameter: Joi.string().required()
             }
         }
     }
});






server.start(function (err) {
        if (err) throw err;
});







//https://github.com/hapijs/hapi/blob/master/API.md#server.route()
// server.route({
//     method: 'GET',
//     path: '/',
//     config: {
//         cache: { expiresIn: 5000 },
//         handler: function (request, h) {

//             const response = h.entity({ etag: 'abc' });
//             if (response) {
//                 response.header('X', 'y');
//                 return response;
//             }

//             return 'ok';
//         }
//     }
// });


// server.route({
//     method: 'GET',
//     path: '/',
//     config: {
//         pre: [
//             [
//                 // m1 and m2 executed in parallel
//                 { method: pre1, assign: 'm1' },
//                 { method: pre2, assign: 'm2' }
//             ],
//             { method: pre3, assign: 'm3' },
//         ],
//         handler: function (request, h) {

//             return request.pre.m3 + '!\n';
//         }
//     }
// });


// server.route({
//     method: 'GET',
//     path: '/',
//     config: {
//         auth: 'default',
//         handler: function (request, h) {

//             return request.auth.credentials.user;
//         }
//     }
// });


