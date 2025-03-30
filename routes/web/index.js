const express = require("express");
const bookRouter = require("./book");

const router = express.Router();

// Middleware to parse JSON and URL-encoded data
router.use('/book', bookRouter);

module.exports = router;