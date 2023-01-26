CREATE DATABASE admin;
\connect admin;

CREATE TABLE users
(
    id SERIAL,
    username text,
    email text,
    first_name text,
    last_name text
    )
;

INSERT INTO users(username, email, first_name, last_name) VALUES (
    'johndoe',
    'jhon@gmail.com',
    'John',
    'Doe'
)
