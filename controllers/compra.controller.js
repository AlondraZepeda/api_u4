const Clientes = require('./../models/compra.model');
var mongoose = require('mongoose');

module.exports = {
    insertCompra: async (req, res) => {
        const compra = new Compra(req.body);
        await compra.save();
        res.json({ 'status': 'nueva compra creada' });
    },

}