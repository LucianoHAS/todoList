module.exports = function() {
    const db = require('./../libs/connect_db')();

    const task = db.Schema({
        title: String,
        description: String,
        status: Boolean
    });
    return db.model('tasks', task);
}