const express = require('express');
const routerProductos = express.Router();

const DB_PRODUCTOS = [];



routerProductos.get('/', (req, res)=>{
    res.status(200).json(DB_PRODUCTOS);
});

routerProductos.get('/probandoProductos', (req, res)=>{
    res.status(200).json({msg:'Productos funcionando'});
});


routerProductos.get('/', (req, res)=>{
    res.status(200).json(`${DB_PRODUCTOS}`);
});

routerProductos.get('/id', (req, res)=>{
    res.status(200).json(`${DB_PRODUCTOS}`.id);
});


module.exports = routerProductos;


