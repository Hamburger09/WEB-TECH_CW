const express = require("express");
const router = express.Router();
const bookRouter = require("./book/index.js");

router.use("/api", bookRouter);

module.exports = router;