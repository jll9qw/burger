var connection = require("../config/connection.js");



function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];


var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  }
}
  module.exports = orm;
