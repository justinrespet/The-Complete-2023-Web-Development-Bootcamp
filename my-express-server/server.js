const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<div><a href='./contact'>Contact Me</a></div> <a href='./about'>About Me</a>");
})

app.get("/contact", function(req, res){
    res.send("<div>Contact me at where I'm at</div> <a href='./'>Home</a>")
})

app.get("/about", function(req, res){
    res.send("<div>I'm am all that is man</div> <a href='./'>Home</a>")
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});