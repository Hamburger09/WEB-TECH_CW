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
      // Check if the book exists
      if (!book) {
        return res.status(404).json({
          message: "Book not found",
        });
      }
      // Render the book details page with the retrieved book
      res.status(200).json({
        message: "Book retrieved successfully",
        book,
      });
    } catch (error) {
      res.status(404).json({
        message: "Book not found",
        error: error.message,
      });
    }
  },

  // Function to add a new book
  addBook: async (req, res) => {
    // Call the book service to add a new book
    try {
      console.log("Adding book", req.body);
      const newBook = await bookService.addBook(req, res);
      res.status(201).json({
        message: "Book added successfully",
        book: newBook,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error adding book",
        error: error.message,
      });
    }
  },

  // Function to delete a book by ID
  deleteBook: async (req, res) => {
    // Call the book service to delete a book by ID
    try {
      const deleted = await bookService.deleteBook(req, res);
      // Check if the book was deleted successfully
      if (!deleted) {
        return res.status(404).json({
          message: "Book not found",
        });
      }
      res.status(200).json({
        message: "Book deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error deleting book",
        error: error.message,
      });
    }
  },
};

module.exports = bookController;
