const express = require("express");
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(){
    console.log("Server started on port 3000")
    
})

// mailchimp APIkey
    // 0c0754c0c70e1219f6431ed51c6407f1-us17

    // mailchimp Audience ID
    // 18fb9e9a8b



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", (req, res) => {
    
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    


})
