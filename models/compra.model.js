var mongoose = require('mongoose');
const { Schema } = mongoose;

const compraSchema = new Schema({
    total: {
        type: Number,
        required: true
    },
    importe: {
        type: Number,
        required: true
    },
    resto:{
        type: Number,
        required: true
    } 
});

const compraModel = mongoose.model('Compra', compraSchema, 'compra');
module.exports  = compraModel;