const path = require("path");
const fs = require("fs");

const books = path.join(__dirname, "../data/books.json");

const bookService = {
  // Function to get all books
  getBooks: () => {
    return new Promise((resolve, reject) => {
      fs.readFile(books, "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  },
  // Function to get a book by ID
  getBookById: (id) => {
    return new Promise((resolve, reject) => {
      fs.readFile(books, "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          const books = JSON.parse(data);
          const book = books.find((book) => book.id === id);
          if (book) {
            resolve(book);
          } else {
            reject(new Error("Book not found"));
          }
        }
      });
    });
  },
};

module.exports = bookService;
