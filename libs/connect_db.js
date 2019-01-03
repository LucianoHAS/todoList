
const mongoose = require('mongoose');
var db;

module.exports = function () {
    if (!db) {
        mongoose.connect('mongodb://localhost/todolistexpress');
    }
    return mongoose;
}