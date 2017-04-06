var express = require('express');

var app = express();

app.listen(3000, function(){
    console.log("Server started running on post number # 3000");
});


app.get("/", function (req, res) {
    res.send("Request from express js");
});
