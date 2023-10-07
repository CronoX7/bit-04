const express = require ('express');
const morgan =require('morgan');
const comicsRouter = require('./routers/comicsRouter')
const loginRouter = require('./routers/loginRouters')
//Servidor
const server =express();
//const port =process.env.PORT;//Se llama una variable de entorno
const port =4000; //Se llama el puerto directamente 
server.set('port',port);// Se establece el puerto del servidor

const cors= require('cors');

server.use(cors());

server.use(express.json()); 
server.use(morgan('dev')); 

server.use ("/comics", comicsRouter);
server.use ("/login", loginRouter);
server.get('/',(request, response)=>{
    
    response.send('Response from Main!')
});

module.exports = server; 



