const express = require('express');
const routerCapitales = express.Router();
const { findAllCapitals, findSpecificCapital } = require('./../controllers/capitales.controller');

routerCapitales.route('/')
    .get(findAllCapitals);

routerCapitales.route('/:id')
    .get(findSpecificCapital);

module.exports = routerCapitales;