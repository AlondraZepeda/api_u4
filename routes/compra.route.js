const express = require('express');
const routerCompra = express.Router();
const { insertCompra} = require('./../controllers/compra.controller');

routerCompra.route('/:id')
    .get(insertCompra);

module.exports = routerCompra;