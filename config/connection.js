
// Set up MySQL connection.
const mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "password202",
  database: "burgers_db"
});


// This code connects to remote database or a local host
// Reconfigure for ES6 operator function
 if( process.env.JAWSDB_URL){
   connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection;
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;