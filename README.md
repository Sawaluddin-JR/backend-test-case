# Backend Test Case

## Entities

- Member/Anggota
- Book/Buku

## Use Case

- Anggota dapat meminjam buku dengan syarat
    - [ ] Anggota tidak boleh meminjam lebih dari 2 buku
    - [ ] Buku yang dipinjam tidak dipinjam oleh anggota lain
    - [ ] Anggota tidak sedang dikenakan penalti
- Anggota mengembalikan buku dengan syarat
    - [ ] Buku yang dikembalikan adalah buku yang telah dipinjam oleh anggota
    - [ ] Jika buku dikembalikan setelah lebih dari 7 hari, anggota akan dikenakan penalti. Anggota yang dikenakan penalti tidak dapat meminjam buku selama 3 hari
- Cek buku
    - [ ] Menampilkan semua buku yang ada dan jumlahnya
    - [ ] Buku yang sedang dipinjam tidak dihitung
- Cek anggota
    - [ ] Menampilkan semua anggota yang ada
    - [ ] Jumlah buku yang dipinjam oleh setiap anggota


# Library Management System

## Deskripsi

Sistem Manajemen Perpustakaan adalah aplikasi untuk mengelola buku, anggota, dan peminjaman buku. Aplikasi ini dibangun menggunakan Node.js Express dan Sequelize ORM dengan MySQL sebagai database.

## Prerequisites

1. **Node.js**: Pastikan Node.js telah terinstal di sistem Anda. Anda dapat mengunduhnya dari [situs resmi Node.js](https://nodejs.org/).
2. **MySQL**: Pastikan MySQL telah terinstal dan berjalan di sistem Anda.

## Setup and Installation

### 1. Clone the Repository

Clone repositori menggunakan perintah Git berikut:

```bash
git clone https://github.com/Sawaluddin-JR/backend-test-case.git
```

### 2. Install Dependencies
Setelah masuk ke folder proyek, jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:

```bash
pnpm install
```

### 3. Setup Environment Variables
Buat file .env di root folder proyek dan tambahkan variabel lingkungan berikut sesuai dengan konfigurasi database Anda:

```makefile
DB_HOST=localhost
DB_PORT=3306
DB_NAME=library_db
DB_USER=root
DB_PASSWORD=
DB_DIALECT=mysql
PORT=3000
```

### 4. Setup Database
Untuk mempersiapkan database, jalankan skrip SQL berikut di MySQL. Ini akan membuat database dan tabel yang diperlukan serta mengisi data awal:

```sql
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
```
### 5. Run the Application
Setelah database diatur, jalankan aplikasi dengan perintah berikut:

```bash
pnpm dev
```

### 6. Access API Documentation
Dokumentasi API dapat diakses di http://localhost:3000/api-docs setelah aplikasi berjalan. Dokumentasi ini menggunakan Swagger UI dan akan memberikan informasi tentang semua endpoint API yang tersedia.


