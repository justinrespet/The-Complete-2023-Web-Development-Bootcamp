const express = require("express");
const bodyParser = require("body-parser");
const { yesTest, getDate } = require("./date");
const date = require(__dirname + "/date.js")

const app = express();

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var items = [];
let workItems = []

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/", function(req, res) {

    let day = getDate();

    res.render('list', {listTitle: day, newListItem: items});
})

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

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work List", newListItem: workItems})
})

app.post("/work", (req, res) => {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", (req, res) => {
    res.render("about")
})



app.listen(3000, function() {
    console.log("Server started on port 3000");
})