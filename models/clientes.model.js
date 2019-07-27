var mongoose = require('mongoose');
const { Schema } = mongoose;

const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apePat: {
        type: String,
        required: true
    },
    apeMat: {
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true,
        maxlength:10
    },
    direccion:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true
    },
    compra:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Compra'
    }
  
});

module.exports = mongoose.model('Cliente',ClienteSchema);