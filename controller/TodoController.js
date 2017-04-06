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

    return {
        get: get,
        create: add
    }
};

module.exports = TodoController;
