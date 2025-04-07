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

    return book;
  },

  // Function to add a new book
  addBook: (req, res) => {
    const newBook = req.body;
    newBook.id = generateId(10);
    books.push(newBook);
    console.log("Adding book", newBook);
    writeToFile(books);

    return newBook;
  },

  // Function to delete a book by ID
  deleteBook: (req, res) => {
    const bookId = req.params.id;
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex !== -1) {
      books.splice(bookIndex, 1);
      fs.writeFileSync(global.books, JSON.stringify(books, null, 2));
      return true;
    } else {
      return false;
    }
  },
};

// create function for overwriting the db file updated db content

let writeToFile = async (users) => {
  await fs.writeFileSync(
    global.books,

    JSON.stringify(users, null, 4),

    "utf8"
  );
};
// Function to generate a random ID of specified length
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
