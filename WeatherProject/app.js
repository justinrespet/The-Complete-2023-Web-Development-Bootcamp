const express = require("express")

const app = express();

const https = require("https");



app.get("/", function(req, res) {

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Edmonton,%20CA&appid=d99de74d0aa3a671c2a6f8fbce48e226&units=metric#';
    https.get(url,
    (response) => {
        console.log(response.statusCode);

        response.on('data', (d) => {
            //process.stdout.write(d);
            var weatherData = JSON.parse(d);
            console.log(weatherData.main.temp)

            res.send("In " + weatherData.name + 
            " it is " + weatherData.main.temp)
        })

        
        
    })

    
})





app.listen(3000, function() {
    console.log("Server is running");
})