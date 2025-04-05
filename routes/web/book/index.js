const express = require("express");
const router = express.Router();
const bookController = require("../../../controllers/web/home/index.js");


// Route to get all books
router.get("/", (req, res) => {
  bookController.index(req, res);
});



module.exports = router;
