const express = require("express");

const router = express.Router();
const bookController = require("../../../controllers/api/book/index.js");

// Route to get all books
// This route handles GET requests to fetch all books
router.get("/", (req, res) => {
  bookController.getBooks(req, res);
});

// Route to get a specific book by ID
// This route handles GET requests to fetch a specific book by its ID
router.get("/:id", (req, res) => {
  bookController.getBookById(req, res);
});

// Route to delete a book by ID
// This route handles DELETE requests to delete a specific book by its ID
router.delete("/:id", (req, res) => {
  bookController.deleteBook(req, res);
});

module.exports = router;
