const express = require("express");
const router = express.Router();
const bookController = require("../../../controllers/web/home/index.js");


// Route to get all books
router.get("/", (req, res) => {
  bookController.index(req, res);
});

// Route to get a specific book by ID
router.get("/:id", (req, res) => {
  bookController.details(req, res);
});


module.exports = router;
