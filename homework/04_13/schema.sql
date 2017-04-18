DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS machines;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(26),
  password VARCHAR(26)
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  machine_id INTEGER
);

CREATE TABLE machines (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(255),
  location_id INTEGER
);
