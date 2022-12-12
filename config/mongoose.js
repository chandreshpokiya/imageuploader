const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/imguploader')

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'db is not connected'))

db.once('open', (e) => {
    if (e) {
        console.log(e);
        return false;
    }
    console.log('db is connected');
})

module.exports = db