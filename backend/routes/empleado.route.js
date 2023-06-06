const express = require('express')
//const app = express()
const empleadoRuta = express.Router()

//Declaramos un objeto del modelo
let Empleado = require('../models/Empleado')

//agregar un nuevo empleado
empleadoRuta.route('/create').post((req, res) => {
    Empleado.create(req.body)
    .then((data)=>{
        console.log("Se inserto un documento");
        res.send(data);
    })
    .catch((err)=>{
        console.error(err)
    });
});

//obtenemos todos los empleados
empleadoRuta.route('/empleados').get((req, res) => {
    Empleado.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.err(err);
    });
});

//Obtenemos un solo empleado por su ID
empleadoRuta.route('/show/:id').get((req, res) => {
    Empleado.findById(req.params.id)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.err(err);
    });
});

//Actualizar empleado
empleadoRuta.route('/update/:id').put((req, res) => {
    Empleado.findByIdAndUpdate(req.params.id, {
       $set: req.body
    })
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.error(err);
    });
});

//Eliminar un empleado
empleadoRuta.route('/delete/:id').delete((req, res) => {
    Empleado.findByIdAndDelete(req.params.id)
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.error(err);
    })
})

module.exports = empleadoRuta;