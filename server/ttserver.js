var express = require('express');
var app = express();
var mustache = require('mustache-express');
var csv = require('csvtojson')
var fs = require('fs');

app.engine('html',mustache()); //tell Express to use mustache templating engine
app.set('view engine', 'html'); //tell Express to use html templates
app.set('views', __dirname+'/../client/views'); //tell Express where to find the html files
app.use("/", express.static(__dirname+'/../client/public')); //tell Express where find the other dynamic files like css/js
app.set('port', (process.env.PORT || 4545));
//Define the port

//Define what happens then a user visits the root route
app.get('/',function(req,res)
{
  res.render("index"); //Tell Express which html file to render for this route
});

app.get('/get-data', function(req, res){
  var contents = JSON.parse(fs.readFileSync(__dirname + "/db/trumptweets.json"));
  // console.log(JSON.stringify(contents))
  res.json(JSON.stringify(contents))
})

//Start the server on the defined port
app.listen(app.get('port'), function()
{
  console.log('Server running on port: ' + app.get('port'));
})
