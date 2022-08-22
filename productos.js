const express = require('express');
const multer = require('multer');
const routerProductos = express.Router();

const DB_PRODUCTOS = [];


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()} - ${file.originalname }`)
    }
});
const upload = multer({storage: storage});

routerProductos.get('/', (req, res)=>{
    res.status(200).json(DB_PRODUCTOS);
});

routerProductos.get('/probandoProductos', (req, res)=>{
    res.status(200).json({msg:'Productos funcionando'});
});

routerProductos.post('/', upload.single('miArchivo'), (req, res, next)=>{
    if (!req.file) {
        const err = new Error('Por favor agregue su archivo');
        return next(err);
    } else {
        console.log(req.body);
        DB_PRODUCTOS.push(req.body);
        res.status(201).json({msg: 'Agregado!', data: req.body});
    }
});

module.exports = routerProductos;


