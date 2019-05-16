// Require the following npm packages inside of the server.js
// *** Dependencies
// =============================================================
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Static directory
// app.use(express.static("public"));


// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync().then(function() {
//     app.listen(PORT, function() {
//       console.log("App listening on PORT " + PORT);
//     });
//   });