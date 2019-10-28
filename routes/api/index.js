const router = require("express").Router();
const booksRoute = require("./books");

// book route
router.use("/books", booksRoute);

module.exports = router;