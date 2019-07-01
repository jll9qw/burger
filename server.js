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



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
 
  console.log("Server listening on: http://localhost:" + PORT);
});

// mySQL database connection
let connection = mysql.createConnection({
  host:  "localhost",
  user: "root",
  password:"password202",
  database: "burgers_db"
})

connection.connect(function(err){
  if (err) throw err;
  console.log("Connected to the database" +connection.threadId);
})

app.get("/", function(req, res){
  connection.query("SELECT * FROM burgers_db;", function(err, data){
    if (err) {
      return res.status(500).end();
    }  
    res.json(data);
  })

});

app.post("/create", function(req, results){
  connection.query("INSERT INTO burgers_db (burger) VALUES (?);", function(err, data){
   if(err) throw err;
   res.redirect("/");
  })
})