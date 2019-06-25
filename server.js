var express = require("express");
const mysql = require("mysql");


var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

const connection = mysql.createConnection({
  host:  "localhost",
  user: "root",
  password:"password202",
  database: "burgers_db"
})

connection.connect(function(err){
  if (err) throw err;
  console.log("Connected to the database" +connection.threadId);
})