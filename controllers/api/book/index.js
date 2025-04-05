const bookService = require("../../../services/book.js");

const bookController = {
  // Function to get all books
  getBooks: async (req, res) => {
    // Call the book service to get all books
    try {
      const books = await bookService.getBooks();

      res.json({
        message: "Books retrieved successfully",
        data: books,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error retrieving books",
        error: error.message,
      });
    }
  },
  // Function to get a book by ID
  getBookById: async (req, res) => {
    // Call the book service to get a book by ID
    try {
      const book = await bookService.getBookById(req, res);
      // Render the book details page with the retrieved book
      res.render("book/details", { book });
    } catch (error) {
      res.status(404).json({
        message: "Book not found",
        error: error.message,
      });
    }
  },
};

module.exports = bookController;
