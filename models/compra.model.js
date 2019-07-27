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

module.exports = mongoose.model('Cliente',ClienteSchema);