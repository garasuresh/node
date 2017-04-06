var CommentController = function(Comment) {
    var get = function (req, res) {
        Comment.find(function ( error, comments) {
            if(!error){
                res.send(comments);
                res.status(200);
            }else {
                res.send({"error": "Internal server error"});
                res.status(500);
            }
        })
    };

    var getCommentsByTodo = function (req, res) {
        Comment.find({'todo_id': req.params.todo_id}, function(error, comments){
            if(error){
                res.send({error: "Internal server error"});
            } else {
                res.send(comments);
                res.status(200);
            }
        });
    };

    var add = function (req, res) {
        var comment = new Comment(req.body);
        comment.save(function(error){
            if(error){
                res.send({error: "Bad request"});
                res.status(400);
            } else {
                res.send(comment);
                res.status(201);
            }
        });
    };

    return {
        get: get,
        getCommentsByTodo: getCommentsByTodo,
        create: add
    }

};

module.exports = CommentController;