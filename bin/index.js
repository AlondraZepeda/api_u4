/*--------------------------------------------------------------
IMPORT SECTION: Area where we reference external dependencies
--------------------------------------------------------------*/
const app = require('../server');
const config = require('../_config');
const {mongoose} = require ('../db');
/*--------------------------------------------------------------
CONFIG SECTION: Area where we set some configurations
--------------------------------------------------------------*/
app.set('port',process.env.PORT || config.PORT);
app.listen(app.get('port'),()=>{
    console.log('Served started!!!');
});