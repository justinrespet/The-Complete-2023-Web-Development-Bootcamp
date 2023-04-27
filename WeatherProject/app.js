const express = require("express")

const app = express();

const https = require("https");



app.get("/", function(req, res) {

    const query = "Edmonton"
    const apiKey = 
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+query+',%20CA&appid=d99de74d0aa3a671c2a6f8fbce48e226&units=metric#';

    https.get(url,
    (response) => {
        console.log(response.statusCode);

        response.on('data', (d) => {
            //process.stdout.write(d);
            var weatherData = JSON.parse(d);
            console.log(weatherData.weather[0].description)
            const iconURL = "https://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"
            
            

            res.write("<h1>In " + weatherData.name + 
            " it is " + weatherData.main.temp +
            " degrees Celsius and " + weatherData.weather[0].description +"</h1>")
            res.write("<image src="+ iconURL +">")
            res.send();
            
        })

        
        
    })

    
})





app.listen(3000, function() {
    console.log("Server is running");
})