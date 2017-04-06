var express = require('express');
var Comment = require('./../model/Comment');
var commentController = require('./../controller/CommentController')(Comment);

var commentRouter = express.Router();

commentRouter.route('')
    .get(commentController.get)
    .post(commentController.create)
;

commentRouter.route('/todos/:todo_id')
    .get(commentController.getCommentsByTodo)
;

module.exports = commentRouter;