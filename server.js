/*--------------------------------------------------------------
IMPORT SECTION: Area where we reference external dependencies
--------------------------------------------------------------*/
const bodyParser = require('body-parser');
const express = require('express');
const morgan  = require('morgan');
const _config = require('./_config');
//ROUTES IMPORTATION--------------------------------------------
const routesClientes = require('./routes/clientes.route');
const routesCompra = require('./routes/compra.route');

/*--------------------------------------------------------------
APP DEFINITION: Area where we initialize the applitacion
--------------------------------------------------------------*/
const app = express();
/*--------------------------------------------------------------
MIDDLEWARE SECTION: Area where we set external configurations
--------------------------------------------------------------*/
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
/*--------------------------------------------------------------
ROUTE SECTION: Area where we set the breakpoints
--------------------------------------------------------------*/
app.use('/clientes', routesClientes);
app.use('/compra',routesCompra)


/*--------------------------------------------------------------
SERVER SECTION: Area where we set external configurations
--------------------------------------------------------------*/
module.exports = app;
