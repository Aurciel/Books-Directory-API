const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 30,
        minlength: 1,
        required: true
    },
    author: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 1
    },
    price: {
        type: Number,
        required: true,
        default: 199
    }
});

const Book = mongoose.model('Book', bookSchema);

exports.Book = Book;