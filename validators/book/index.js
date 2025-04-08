const { body } = require("express-validator");

const addUpdateBookValidation = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("Title is required")
      .isLength({ min: 3 })
      .withMessage("Title must be at least 3 characters long"),
    body("image")
      .notEmpty()
      .withMessage("Image URL must not be empty")
      .isURL()
      .withMessage("Image must be a valid URL"),

    body("summary")
      .notEmpty()
      .withMessage("Book summary must not be empty")
      .isLength({ min: 10 })
      .withMessage("Summary should be at least 10 characters long"),

    body("review")
      .notEmpty()
      .withMessage("Book review must not be empty")
      .isLength({ min: 10 })
      .withMessage("Review should be at least 10 characters long"),

    body("rating")
      .notEmpty()
      .withMessage("Rating is required")
      .isInt({ min: 1, max: 5 })
      .withMessage("Rating must be a number between 1 and 5"),
  ];
};

module.exports = {
    addUpdateBookValidation,
}