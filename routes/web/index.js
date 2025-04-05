const express = require("express");
const router = express.Router();
const bookRouter = require("./book");

// Router to get all the books
router.use("/book", bookRouter);

module.exports = router;
