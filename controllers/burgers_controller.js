var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log("/");
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.create([
    "burger_name", "devoured"]
, [
    req.body.burger_name,false
  ], function(result) {
    // Send back the ID of the new quote

   
    res.redirect("/");
    // res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured:  true,
    },
{
  where: {
  id:req.param.id
}
}    
    ).then(function(data){
      res.json("/");
      
    });
});


// Export routes for server.js to use.
module.exports = router;
