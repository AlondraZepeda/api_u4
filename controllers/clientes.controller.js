const Clientes = require('./../models/clientes.model');
const Compra = require('./../models/compra.model');
var mongoose = require('mongoose');

var compraController=require("./compra.controller");

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

module.exports.create = create;