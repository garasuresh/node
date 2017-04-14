var TodoController = function(Todo) {
    var get = function (req, res) {
        Todo.find(function (error, todos) {
            if(!error){
                res.status(200);
                res.send(todos);
            } else {
                res.status(500);
                res.send({"error": "Internal server error"});
            }
        });
    };

    var add = function(req, res){
        var todo = new Todo(req.body);

        todo.save(function(error){
            if(!error){
                res.send(todo);
                res.status(201);
            } else {
                res.send({"error": "bad request"});
                res.status(400);
            }
        });
    };

    var addComment = function(req, res) {
        Todo.findById(req.params.id, function (error, todo) {
            if(!error){
                todo.comments.push(req.body);
                todo.update(function (error) {
                    if(!error){
                        res.status(201);
                        res.send(todo);
                    } else {
                        res.status(400);
                        res.send({error: "Bad request"});
                    }
                })
            } else {
                res.status(404);
                res.send({error: "Record not found"})
            }
        })
    };

    return {
        get: get,
        create: add,
        addComment: addComment
    }
};

module.exports = TodoController;
