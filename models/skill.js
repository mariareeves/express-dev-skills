// models skill.js
const books = [
    { id: 125223, book: 'The Alchemist', done: true },
    { id: 127904, book: 'Miracle Morning', done: false },
    { id: 139608, book: 'The 5am Club', done: false },
    { id: 139608, book: 'Rich Dad Poor Dad', done: false },
    { id: 139608, book: 'The Four Agreement', done: false },
    { id: 139608, book: 'Zero Limits', done: false },
    { id: 139608, book: 'The Secret', done: false },
    { id: 139608, book: 'Mind Over Weight', done: false },
    { id: 139608, book: '5 Love Languages', done: false },
    { id: 139608, book: 'Atomic Habits', done: false },
];

module.exports = {
    getAll
};

function getAll() {
    return books;
}
