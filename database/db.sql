-- DB operations

-- CREATE DATABASE IF NOT EXISTS  NodeDB;


-- Create the first dummy table
CREATE TABLE IF NOT EXISTS table1 (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age INT
);

-- Insert 5 rows into table1
INSERT INTO table1 (name, age) VALUES
    ('John', 25),
    ('Alice', 30),
    ('Bob', 22),
    ('Eva', 28),
    ('Charlie', 35);

-- Create the second dummy table
CREATE TABLE IF NOT EXISTS table2 (
    id SERIAL PRIMARY KEY,
    city VARCHAR(255),
    population INT
);

-- Insert 5 rows into table2
INSERT INTO table2 (city, population) VALUES
    ('New York', 8000000),
    ('Los Angeles', 4000000),
    ('Chicago', 2700000),
    ('Houston', 2300000),
    ('Phoenix', 1700000);

-- Create the third dummy table
CREATE TABLE IF NOT EXISTS table3 (
    id SERIAL PRIMARY KEY,
    product VARCHAR(255),
    price DECIMAL(10, 2)
);

-- Insert 5 rows into table3
INSERT INTO table3 (product, price) VALUES
    ('Laptop', 1200.50),
    ('Smartphone', 800.75),
    ('Headphones', 99.99),
    ('Tablet', 400.25),
    ('Camera', 600.00);


-- psql -d NodeDB -U newuser -W -f db.sql
