const express = require("express");
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(){
    console.log("Server started on port 3000")
    
})



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
})
