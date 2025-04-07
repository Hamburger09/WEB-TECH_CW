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
  details: async (req, res) => {
    try {
      res.render("book/details");
    } catch (error) {
      res.status(404).json({
        error: error.message,
      });
    }
  },
  add: async (req, res) => {
    try {
      res.render("book/add_edit");
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  edit: async (req, res) => {
    try {
      res.render("book/add_edit");
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
};

module.exports = homeController;
