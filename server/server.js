var express = require('express');
var app = express();
var mustache = require('mustache-express');
var d3 = require('d3');

app.engine('html',mustache()); //tell Express to use mustache templating engine
app.set('view engine', 'html'); //tell Express to use html templates
app.set('views', __dirname+'/../client/views'); //tell Express where to find the html files
app.use("/", express.static(__dirname+'/../client/public')); //tell Express where find the other dynamic files like css/js

//Define the port
var port = 8080;

//Define what happens then a user visits the root route
app.get('/',function(req,res)
{
  res.render("index"); //Tell Express which html file to render for this route
});

//Start the server on the defined port
app.listen(port, function()
{
  console.log('Server running on port: '+port);
})
