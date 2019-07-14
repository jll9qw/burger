// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
// Set up MySQL connection.
const app = express();
var PORT = process.env.PORT || 8007;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes 
const routes = require("./controllers/burgers_controller.js");

app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
 
  console.log("Server listening on: http://localhost:" + PORT);
});


