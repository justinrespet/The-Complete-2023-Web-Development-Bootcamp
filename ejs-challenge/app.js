//jshint esversion:6

// express includes
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

// global post array
let posts = [];

// starter content for pages
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutStartingContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactStartingContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// creation of express object
const app = express();

// set embedded javascript templates
app.set('view engine', 'ejs');

// body parser allows for incoming form submission data to be accessed
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// home route response
app.get("/", (req, res) => {
  res.render("home", {homeContent: homeStartingContent, 
                      homeNewPosts: posts})
})

// about route response
app.get("/about", (req, res) => {
  res.render("about", {aboutContent: aboutStartingContent})
})

// contact route response
app.get("/contact", (req, res) => {
  res.render("contact", {contactContent: contactStartingContent})
})

// compose route response
app.get("/compose", (req, res) => {
  res.render("compose")
})

// parse compose page post request
app.post("/compose", (req, res) => {

  // storing post for json object population
  let postTitle = req.body.postTitle
  let postBody = req.body.postBody
  
  // json object - I'm guessing for embedded javascript
  const post = {
    title: postTitle,
    content: postBody
  };

  // add post to posts
  posts.push(post);
  res.redirect("/");
  
})

// use express routing 
app.get("/posts/:postName", (req, res) => {

  // lodash lowerCase function
  let postName = _.lowerCase(req.params.postName);
  //console.log(postName)

  // data to render
  let titleRender = "404"
  let contentRender = "Not found, bucko"

  posts.forEach( (post) => {

    let postTitle = _.lowerCase(post.title);
    //console.log(post);

    // match on formatted string
    if (postName == postTitle){
      //console.log("match found: " + post.title)

      // render with original text
      titleRender = post.title;
      contentRender = post.content;
    }
  })

  // render it up
  res.render("post", {postTitle: titleRender, 
                      postBody: contentRender})

})






// boot up server listener
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
