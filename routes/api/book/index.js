const express = require("express");

const router = express.Router();
const bookController = require("../../../controllers/api/book/index.js");

// Define API routes
router.get("/", (req, res) => {
    console.log('sdfs')
  bookController.getBooks(req, res);
});

module.exports = router;
