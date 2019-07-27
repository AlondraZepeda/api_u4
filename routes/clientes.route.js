const express = require('express');
const routerCliente = express.Router();
const { findAllClientes } = require('./../controllers/clientes.controller');

routerCapitales.route('/')
    .get(findAllClientes);

module.exports = routerCapitales;