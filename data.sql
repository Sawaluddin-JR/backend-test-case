DROP DATABASE IF EXISTS library_db;
CREATE DATABASE IF NOT EXISTS library_db;
USE library_db;

CREATE TABLE books (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `code` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `stock` INT NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` DATETIME
);

CREATE TABLE members (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `code` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `penalty_end_date` DATE NULL,
    `loan_book_amount` INT DEFAULT 0,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` DATETIME
);

CREATE TABLE `borrowed_books` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `member_id` INT NOT NULL,
    `book_id` INT NOT NULL,
    `borrow_date` DATE NOT NULL,
    `return_date` DATE NULL,
    `returned` BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (member_id) REFERENCES members(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO books (`code`, title, author, stock) VALUES
	('HPT-1', 'Harry Potter', 	'J.K Rowling', 		1),
	('SHR-3', 'A Study in Scarlet', 'Arthur Conan Doyle', 	1),
	('TWL-1', 'Twilight', 		'Stephenie Meyer',	1),
	('HOB-3', 'The Hobbit, or There and Back Again',  'J.R.R. Tolkien', 	1),
	('NRN-7', 'The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 	1);

INSERT INTO members (CODE, NAME) VALUES
	('M001', 'Angga'),
	('M002', 'Ferry'),
	('M003', 'Putri');