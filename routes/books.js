var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
const booksCtrl = require('../controllers/books');

// All actual paths starts with "/books"

// GET /books
router.get('/', booksCtrl.index);
// Get /todos/new
router.get('/new', booksCtrl.new)
// Get /books/:id
router.get('/:id', booksCtrl.show);


module.exports = router;
