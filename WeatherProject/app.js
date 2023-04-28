const express = require("express")
const https = require("https");

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))

app.post("/", function(req, res){

    const query = req.body.cityName
    const apiKey = "d99de74d0aa3a671c2a6f8fbce48e226"
    const unit = 'metric'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid='+apiKey+'&units=' + unit;
    console.log(url)

    https.get(url,
    (response) => {
        console.log(response.statusCode);

        response.on('data', (d) => {
            //process.stdout.write(d);
            const weatherData = JSON.parse(d);
            //console.log(weatherData.weather[0].description)
            const iconURL = "https://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"
            
            res.write("<h1>In " + weatherData.name + 
            " it is " + weatherData.main.temp +
            " degrees Celsius and " + weatherData.weather[0].description +"</h1>")
            res.write("<image src="+ iconURL +">")
            res.send();
        })
    })
})


app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");
})








app.listen(3000, function() {
    console.log("Server is running");
})