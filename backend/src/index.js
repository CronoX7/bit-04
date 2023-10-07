require('dotenv').config();
require('./database');

const server =require('./server');//Se importa el módulo de server.js

const port =server.get('port'); // Retorna lo que está guardado en el port del server.js

server.listen(port, ()=>{ //este método permite encender el servidor con el puerto asignado
    console.log(`Server running on port ${port}` );//Una vez se levante el servidor ejecuta esta instrucción
})