const express = require("express");

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    console.log(req.body.num1)
    var answer = Number(req.body.num1) + Number(req.body.num2);
    res.send("The result of the calculation is " + answer)
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});