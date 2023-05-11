const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var items = [];
let workItems = []

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

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

    res.render('list', {listTitle: day, newListItem: items});
})

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work List", newListItem: workItems})
})

app.post("/work", (req, res) => {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.post("/", (req, res) => {

    let item = req.body.newItem

    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }

    
    
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
})