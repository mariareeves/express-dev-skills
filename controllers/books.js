// controllers/books.js

// convention is to name the model in uppercase and singular
const Book = require('../models/book')

module.exports = {
    index,
    show,
    new: newBook,
    create,
};

function index(req, res) {
    res.render('books/index', {
        books: Book.getAll(),
        title: 'All Books',
    });
}

function show(req, res) {
    res.render('books/show', {
        book: Book.getOne(req.params.id),
        title: 'Book Details',
    });
}

function newBook(req, res) {
    res.render('books/new', {
        title: 'New Book'
    });
}

function create(req, res) {
    console.log(req.body);
    Book.create(req.body);
    // redirect is used anytime data is changed
    res.redirect('/books');
}