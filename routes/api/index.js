const express = require("express");
const router = express.Router();
const bookRouter = require("./book/index.js");

router.use("/api/book", bookRouter);

module.exports = router;