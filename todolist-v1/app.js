const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res) {
    
    var today = new Date();
    var currentDay = today.getDay();
    // var day = "";

    var options = {
        weekday : "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options)

    // if (currentDay === 6  || currentDay === 0)
    // {
    //     day = "Weekend";
    // }
    // else {
    //     day = "Weekday";
    // }

    res.render('list', {kindOfDay: day, newListItem: items});
})

app.post("/", (req, res) => {
    items.push(req.body.newItem)
    
    res.redirect("/")
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
})