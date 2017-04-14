var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;

var Comment = new Schema({
    description: { type: String, required: true, trim: true }
});
Comment.plugin(timestamps);

var Todo = new Schema({
    task: String,
    description: String,
    status: String,
    priority: String,
    comments: [Comment]
});

Todo.plugin(timestamps);

module.exports = mongoose.model("todo", Todo);