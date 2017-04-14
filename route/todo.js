var express = require('express');
var Todo = require('./../model/Todo');
var todoController = require('./../controller/TodoController')(Todo);

var todoRouter = express.Router();

todoRouter.route('')
    .get(todoController.get)
    .post(todoController.create)
;

todoRouter.route('/:id/comments')
    .post(todoController.addComment)
;

module.exports = todoRouter;