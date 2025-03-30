const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const webRoutes = require("./routes/web");

const app = express();

const PORT = 4200;

books = path.join(__dirname, "./data/books.json");

app.get("/", (req, res) => {
  res.redirect("/book");
});

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/css", express.static(path.join(__dirname, "public/styles")));
app.use("/js", express.static(path.join(__dirname, "public/javascripts")));

app.use("/", webRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
