CREATE TABLE User (
  user_id INT SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(256) NOT NULL,
  password VARCHAR(255) NOT NULL
);