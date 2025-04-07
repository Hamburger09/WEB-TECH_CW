const express = require("express");
const router = express.Router();
const bookController = require("../../../controllers/web/home/index.js");

// Route to get all books
router.get("/", bookController.index);

// Route to get a specific book by ID
router.get("/details/:id", bookController.details);

// Route to add a new book
router.get("/add", bookController.add);

// Route to edit a book by ID
router.get("/edit/:id", bookController.edit);

module.exports = router;
