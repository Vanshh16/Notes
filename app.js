const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

const dt = new Date();
let options = {
  dateStyle: "long" ,
  timeStyle: "short"
};
const date = dt.toLocaleString("en-US",options);
let newPosts=[];
let content;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res)
{
  res.render("home",{posts:newPosts});
});


app.get("/compose", function(req,res)
{
  res.render("compose",{editedAt:date});

});

app.post("/compose", function(req,res)
{

  content = req.body.newPost;

  newPosts.push(content);
  res.redirect("/");

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
