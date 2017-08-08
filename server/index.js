/*
 * HTTP/2 is not currently supported on Heroku although this may change in future. 
*/

const express = require("express");
var app = express();

app.set("port", (process.env.PORT || 5001));
app.use(express.static(__dirname + "/../client/public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + '/../client/public/index.html');
});

app.listen(app.get("port"), function() {
  console.log("App is running on localhost:", app.get("port"));
});
