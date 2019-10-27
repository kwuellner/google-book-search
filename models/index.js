const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookModel = new Schema({
    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    description: String,
    image: { type: String, trim: true },
    link: { type: String, trim: true },
});

const Book = mongoose.model("Book", bookModel);

module.exports = Book;