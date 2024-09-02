
--command for creating database in postgre sql

   CREATE DATABASE clothingimagesdb;


--categories table
    CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL  
);

---imageurls table
    CREATE TABLE imageurls (
    id SERIAL PRIMARY KEY,
    category_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);
--enabling pg_trgm extension

CREATE EXTENSION IF NOT EXISTS pg_trgm;

---Now insert some data

------
Replace category_id with the correct ID for 'polo'
INSERT INTO ImageURLs (category_id, image_url)
VALUES
    ((SELECT id FROM Categories WHERE category_name = 'polo'), '/assets/poloshirt1.jpg'),
    ((SELECT id FROM Categories WHERE category_name = 'polo'), '/assets/poloshirt2.jpg'),
    ((SELECT id FROM Categories WHERE category_name = 'polo'), '/assets/poloshirt3.jpg'),
    ((SELECT id FROM Categories WHERE category_name = 'polo'), '/assets/poloshirt4.jpg');

----

Replace category_id with the correct ID for 't-shirts'
INSERT INTO ImageURLs (category_id, image_url)
VALUES
    ((SELECT id FROM Categories WHERE category_name = 't-shirts'), '/assets/tshirt1.jpg'),
    ((SELECT id FROM Categories WHERE category_name = 't-shirts'), '/assets/tshirt2.jpg'),
    ((SELECT id FROM Categories WHERE category_name = 't-shirts'), '/assets/tshirt3.jpg'),
    ((SELECT id FROM Categories WHERE category_name = 't-shirts'), '/assets/tshirt4.jpg');

----

Replace category_id with the correct ID for 'shirts'
INSERT INTO ImageURLs (category_id, image_url)
VALUES
    ((SELECT id FROM Categories WHERE category_name = 'shirts'), '/assets/shirt1.jpg'),
    ((SELECT id FROM Categories WHERE category_name = 'shirts'), '/assets/shirt2.jpg'),
    ((SELECT id FROM Categories WHERE category_name = 'shirts'), '/assets/shirt3.jpg');

Replace category_id with the correct ID for 'jeans'
INSERT INTO ImageURLs (category_id, image_url)
VALUES
    ((SELECT id FROM Categories WHERE category_name = 'jeans'), '/assets/jeans1.jpg'),
    ((SELECT id FROM Categories WHERE category_name = 'jeans'), '/assets/jeans2.jpg'),
    ((SELECT id FROM Categories WHERE category_name = 'jeans'), '/assets/jeans3.jpg');
