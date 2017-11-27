let Hapi = require('hapi');
let server = new Hapi.Server();

let fs = require('fs');

let path = require('path');

let rot13 = require('rot13-transform');





   
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});





server.route({
    path: '/',
    method:'GET',
    config: {
    handler: function(request, reply){
   
        reply(fs.createReadStream(path.join(__dirname, 'input.txt')).pipe(rot13()));
    }}
});



// server.route({
//     path: '/',
//     method:'GET',
//     handler: function(request, reply){
               
//         let Path = path.join(__dirname, 'input.txt');               
//         reply(fs.createReadStream(Path).pipe(Rot13()));
//     }
// });



// server.route({
//     path: '/',
//     method:'GET',
//     config: {
//     handler: function(request, reply){
//         let File = file:('input.txt')
//         reply(fs.createReadStream(File).pipe(rot13()));
//     }}
// });


// server.route({
//     method: 'GET',
//     // path: '/proxy',
//     path: '/',

//     handler: {view: 'template.html'}

    
    
// });

// https://www.npmjs.com/package/rot13-transform

// ReadableStreamString("this is a string")
//     .pipe(rot13())
//     .pipe(process.stdout);








server.start(function (err) {
        if (err) throw err;
});



