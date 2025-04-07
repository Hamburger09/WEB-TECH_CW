const express = require("express");

const router = express.Router();
const bookController = require("../../../controllers/api/book/index.js");

// Route to get all books
// This route handles GET requests to fetch all books
router.get("/", bookController.getBooks);

// Route to get a specific book by ID
// This route handles GET requests to fetch a specific book by its ID
router.get("/:id", bookController.getBookById);

// Route to add a new book
// This route handles POST requests to add a new book
router.post("/add", bookController.addBook);

// Route to update a book by ID
// This route handles PUT requests to update a specific book by its ID
router.put("/update/:id", bookController.updateBook);

// Route to delete a book by ID
// This route handles DELETE requests to delete a specific book by its ID
router.delete("/delete/:id",bookController.deleteBook);

module.exports = router;
