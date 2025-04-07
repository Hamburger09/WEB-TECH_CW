const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");

const app = express();

global.books = path.join(__dirname, "./data/books.json");

const PORT = 4200;

books = path.join(__dirname, "./data/books.json");

// Redirect root URL to /book
app.get("/", (req, res) => {
  res.redirect("/book");
});

// Middleware to parse JSON and URL-encoded data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/favicon", express.static(path.join(__dirname, "public/favicon")));
app.use("/icons", express.static(path.join(__dirname, "public/icons")));
app.use("/css", express.static(path.join(__dirname, "public/styles")));
app.use("/js", express.static(path.join(__dirname, "public/javascripts")));

app.use("/", webRoutes);
app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
