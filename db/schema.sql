-- Create the burgers_db.
DROP DATABASE IF EXISTS burgers_db;
-- Switch to or use the burgers_db.
CREATE DATABASE burgers_db;

-- Create a burgers table
USE burgers_db;

CREATE TABLE  burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);



