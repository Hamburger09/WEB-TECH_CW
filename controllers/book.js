const bookService = require("../services/book");

const bookController = {
  // Function to get all books
  getBooks: async (req, res) => {
    // Call the book service to get all books
    try {
      const books = await bookService.getBooks();
      // Render the books page with the retrieved books
      res.render("book", { books });
    } catch (error) {
      res.status(500).json({
        message: "Error retrieving books",
        error: error.message,
      });
    }
  },
};

module.exports = bookController;
