const homeController = {
  index: async (req, res) => {
    try {
      res.render("book");
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  getBookById: async (req, res) => {
    try {
      res.render("book/details");
    } catch (error) {
      res.status(404).json({
        error: error.message,
      });
    }
  },
};

module.exports = homeController;
