const express = require('express');
const routerCliente = express.Router();
const { findAllClientes } = require('./../controllers/clientes.controller');

routerCliente.route('/')
    .get(findAllClientes);

module.exports = routerCliente;