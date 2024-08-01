const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Retrieve a list of available books (not being borrowed)
 *     responses:
 *       200:
 *         description: A list of available books (not being borrowed).
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 */
router.get("/", bookController.getAllBooks);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The book ID
 *     responses:
 *       200:
 *         description: A single book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 code:
 *                   type: string
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *       404:
 *         description: Book not found.
 */
router.get("/:id", bookController.getBookById);

/**
 * @swagger
 * /api/books/add-book:
 *   post:
 *     summary: Add a book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       201:
 *         description: A book has been added.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 code:
 *                   type: string
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 stock:
 *                   type: integer
 */
router.post("/add-book", bookController.addBook);

/**
 * @swagger
 * /api/books/delete-book/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The book ID
 *     responses:
 *       200:
 *         description: The book has been deleted.
 */
router.delete("/delete-book/:id", bookController.deleteBook);

/**
 * @swagger
 * /api/books/update-book/{id}:
 *   put:
 *     summary: Update a book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The book ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       200:
 *         description: The book has been updated.
 */
router.put("/update-book/:id", bookController.updateBook);

module.exports = router;
