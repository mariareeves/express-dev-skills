// models book.js
const books = [
    { id: 125223, book: 'The Alchemist', read: true },
    { id: 127904, book: 'Miracle Morning', read: true },
    { id: 251626, book: 'The 5am Club', read: true },
    { id: 187212, book: 'Rich Dad Poor Dad', read: true },
    { id: 251421, book: 'The Four Agreement', read: true },
    { id: 472536, book: 'Zero Limits', read: false },
    { id: 612615, book: 'The Secret', read: true },
    { id: 912661, book: 'Mind Over Weight', read: false },
    { id: 326144, book: '5 Love Languages', read: true },
    { id: 523761, book: 'Atomic Habits', read: true },
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};

function getAll() {
    return books;
}
function getOne(id) {
    // URL params are strings to it needs to convert to a number
    id = parseInt(id);
    // find method to find the first obj that matched the id
    return books.find(book => book.id === id);
}

function create(book) {
    // adding a new id
    book.id = Date.now() % 1000000;
    // starting out at false bc new books havent been read yet
    book.read = false;
    books.push(book)
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = books.findIndex(book => book.id === id);
    books.splice(idx, 1);
}