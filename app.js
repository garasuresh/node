// var http = require('http');
//
// var handleRequests = function (req, res) {
//
//     console.log("Requested url is " + req.url);
//
//     res.write("Running node js");
//     res.end();
// };
//
// var server = http.createServer(handleRequests);
//
// server.listen(3000, function () {
//     console.log("Server started running on port number # 3000");
// });


var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var todoRouter = require('./route/todo');
var commentRouter = require('./route/comment');

var db = mongoose.connect("mongodb://localhost/todo");


var app = express();
app.use(bodyParser.json());


app.listen(3000, function () {
    console.log("Server started running");
});

app.use('/todos', todoRouter);
app.use('/comments', commentRouter);