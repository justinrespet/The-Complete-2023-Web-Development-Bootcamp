const express = require("express");
const request = require('request');
const bodyParser = require('body-parser');
const https = require("https")

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 'mr black' ")
    
})

// mailchimp APIkey
    // 0c0754c0c70e1219f6431ed51c6407f1-us17

    // mailchimp Audience ID
    // 18fb9e9a8b



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
})


app.post("/failure", (req, res) => {
    res.redirect("/")
})

app.post("/", (req, res) => {
    
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status : "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us17.api.mailchimp.com/3.0/lists/18fb9e9a8b"

    const options = {
        method: "POST",
        auth: "justy1:0c0754c0c70e1219f6431ed51c6407f1-us17"
    }

    const request = https.request(url, options, (response) => {
        response.on("data", function(data) {
            console.log("Parsed JSON: ") 
            var parsedData = JSON.parse(data);
            console.log(parsedData)


            if (parsedData.error_count == 0){
                res.sendFile(__dirname + "/success.html");
            }
            else {
                res.sendFile(__dirname + "/failure.html");
                console.log(parsedData.errors[0].error);
            }

            // if (response.statusCode == 200){
            //     res.sendFile(__dirname + "/success.html");
            // }
            // else {
            //     res.sendFile(__dirname + "/failure.html");
            // }
        })
    });

    request.write(jsonData);
    request.end();

});
