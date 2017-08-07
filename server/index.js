/*
 * TO-DO:
 * 1) rename static to build ?
 * 2) split package.json for server and client
 * 3) set up webpack+babel+preact
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
