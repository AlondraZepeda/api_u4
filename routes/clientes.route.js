const express = require('express');
const routerCliente = express.Router();
const { createCliente } = require('./../controllers/clientes.controller');

routerCliente.route('/')
    .get(createCliente);

module.exports = createCliente;