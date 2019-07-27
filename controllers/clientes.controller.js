const Clientes = require('./../models/clientes.model');
const Compra = require('./../models/compra.model');
var mongoose = require('mongoose');

var compraController=require("./compra.controller");

module.exports = {
    getAllClientes: async (req, res) => {
        const clientes = await Clientes.find();
        res.json(clientes);
    },
    getClientes: async (req, res) => {
        const clientes = await Clientes.findById({ _id: req.params.id });
        res.json(clientes);
    },
    insertClientes: async (req, res) => {
        const clientes = new Clientes(req.body);
        var insertCompra = await compraController.insertCompra(compra, Compra);
        compra["compra"] =  insertCompra._id;
        const compra = new Compra(req.body);
        await clientes.save();
        res.json({ 'status': 'Nuevo cliente agregado' });
    },
    updateClientes: async(req,res) => {
        const {id} = req.params;
        const clientes = {
            nombre: req.body.nombre,
            apePat: req.body.apePat,
            apeMat: req.body.apeMat,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            correo: req.body.correo
        };
        await Clientes.findByIdAndUpdate(id, {$set: clientes}, {new: true});
        res.json({'status':'Cliente actualizado'});
    },
    deleteClientes: async(req,res) => {
        await Clientes.deleteOne({_id: req.params.id});
        res.json({'status': 'Eliminado'});
    },
}


async function create(clientes, compra, Clientes, Compra) {

    var compra = {
        compra: compra
    };

    var compraCreated = await compraController.create(compra, Compra);

    product["compra"] = compraCreated._id;

    var clientesCreated = await Clientes.insertCompra(clientes)
        .then((data) => {
            console.log("Cliente agregado");
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            return error;
        });
    return productCreated;
}