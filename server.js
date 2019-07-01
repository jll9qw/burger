// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
// Set up MySQL connection.
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes 
const routes = require("./controllers/subs_controller.js");

app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
 
  console.log("Server listening on: http://localhost:" + PORT);
});



// app.get("/", function(req, res){
//   connection.query("SELECT * FROM burgers;", function(err, data){
//     if (err) {
//       return res.status(500).end();
//     }

//     res.render("index", { burgers: data });  })

// });

// app.post("/create", function(req, res){
//   connection.query("INSERT INTO burgers (burger) VALUES (?);",[req.body.burger], function(err, result){
//     if (err) {
//       return res.status(500).end();
//     }


//    res,json(data); 
//     res.redirect("/");
//   })
// })

// // Retrieve all burgers
// app.get("/burgers", function(req, res) {
//   connection.query("SELECT * FROM burgers;", function(err, data) {
//     if (err) {
//       return res.status(500).end();
//     }

//     res.json(data);
//   });
// });
