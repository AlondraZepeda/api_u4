const Clientes = require('./../models/compra.model');
var mongoose = require('mongoose');

module.exports = {
    insertCompra: async (req, res) => {
        const compra = new Compra(req.body);
        await compra.save();
        res.json({ 'status': 'nueva compra creada' });
    },
    getAllCompra: async (req, res) => {
        const compra = await Compra.find();
        res.json(compra);
    },
    getCompra: async (req, res) => {
        const compra = await Compra.findById({ _id: req.params.id });
        res.json(compra);
    }
}