TRUNCATE TABLE USERS;
TRUNCATE TABLE LOCATIONS;
TRUNCATE TABLE MACHINES;

ALTER SEQUENCE users_ud_seq RESTART WITH 1;
ALTER SEQUENCE locations_id_seq RESTART WITH 1;
ALTER SEQUENCE machines_id_seq RESTART WITH 1;

-- users
INSERT INTO users(username, password) VALUES ('Rush', 'password');
INSERT INTO users(username, password) VALUES ('Ezmeralda', 'dogfood');

-- locations
INSERT INTO locations(name, address) VALUES ('Kroger', '3479 Memorial Drive in Decatur, Georgia 30032');
INSERT INTO locations(name, address) VALUES ('Zaxbys', '3490 Memorial Drive in Decatur, Georgia 30032');
INSERT INTO locations(name, address) VALUES ('Pho 24', '4646 Buford Hwy NE, Atlanta, GA 30341');

-- machines
INSERT INTO machines(name, category, location_id) VALUES ('Homies', 'figurines', 1);
INSERT INTO machines(name, category, location_id) VALUES ('Treasure Chest', 'toys', 1);
INSERT INTO machines(name, category, location_id) VALUES ('Tribal Tattoes', 'tattoos', 2);
INSERT INTO machines(name, category, location_id) VALUES ('Rat Rings', 'toys', 2);
INSERT INTO machines(name, category, location_id) VALUES ('Ninjas', 'figurines', 3);
INSERT INTO machines(name, category, location_id) VALUES ('Animal Stickers', 'stickers', 3);
