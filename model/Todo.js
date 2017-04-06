var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Todo = new Schema({
    task: String,
    description: String,
    status: String,
    priority: String
});

module.exports = mongoose.model("todo", Todo);