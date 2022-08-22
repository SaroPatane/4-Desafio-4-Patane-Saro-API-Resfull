const express = require('express');
const morgan = require('morgan');


const app = express();
const routerProductos = require('./productos.js');



app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


app.use('/api/productos', routerProductos);



const PORT = 8081;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto http://localhost:${PORT}`);
})
server.on('error', error=>{
    console.error(`Error en el servidor ${error}`);
});
