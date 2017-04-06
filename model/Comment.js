var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;

var Comment = new Schema({

    todo_id: { type: String, required: true },
    description: { type: String, required: true, trim: true }
});

Comment.plugin(timestamps);

module.exports = mongoose.model('comment', Comment);
