const mongoose = require('mongoose');
const _config = require('./_config');
const URI = _config.DB;

mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;