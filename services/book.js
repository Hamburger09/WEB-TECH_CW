const path = require("path");
const fs = require("fs");

if (!global.books) {
  global.books = path.join(__dirname, "../data", "books.json");
}

const books = require(global.books);

const bookService = {
  // Function to get all books
  getBooks: (req, res) => {
    return books;
  },
  // Function to get a book by ID
  getBookById: (req, res) => {
    const bookId = req.params.id;
    const book = books.find((book) => book.id === bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return book;
  },

  // Function to add a new book
  addBook: (req, res) => {
    const newBook = req.body;
    newBook.id = generateId(10);
    books.push(newBook);
    fs.writeFileSync(global.books, JSON.stringify(books, null, 2));
    return newBook;
  },
};

const generateId = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = bookService;
