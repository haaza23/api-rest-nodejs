CREATE DATABASE admin;
\connect admin;

CREATE TABLE users
(
    id SERIAL,
    username text,
    password text,
    email text,
    first_name text,
    last_name text
    )
;

INSERT INTO users(username, password, email, first_name, last_name) VALUES (
    'johndoe',
    'asdf1234',
    'jhon@gmail.com',
    'John',
    'Doe'
)
