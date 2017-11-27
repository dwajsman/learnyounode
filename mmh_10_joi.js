let Hapi = require('hapi');
let server = new Hapi.Server();

// let fs = require('fs');

// let path = require('path');

let Joi = require('joi');



// let isGuest 
// let username 
// let accessToken 
// let password 

   
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
    //port: Number(8080)
});








server.start(function (err) {
        if (err) throw err;
});



server.route({
   //  var routeConfig = {
        path: '/login',
        method: 'POST',
        //handler: myHandler,
        config: {
            handler: function(request, reply){ reply("login successful")},

            validate: {
               payload: Joi.object({


                    isGuest: Joi.boolean().required(),
                    username: Joi.string().required(),
                    password: Joi.string().alphanum().required(),
                    accessToken: Joi.string().alphanum(),
                    //birthyear: Joi.number().integer().min(1900).max(2013),
                    //email: Joi.string().email()
               })
               .options({allowUnknown: true})
              // .with('username', 'birthyear')
               .without('password', 'accessToken')
            }
        }
    })


//https://futurestud.io/tutorials/hapi-request-payload-validation-with-joi
 // validate: {
 //      payload: {
 //        email: Joi.string().email().required(),
 //        password: Joi.string().min(6).max(200).required()
 //      }




