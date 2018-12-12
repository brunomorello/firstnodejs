const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');

const USERS_SCHEMA = `
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		full_name VARCHAR(60) NOT NULL,
		email VARCHAR(255) NOT NULL,
		password VARCHAR(255) NOT NULL
	)
`;

const INSERT_USER_1 = `
	INSERT INTO users(
		full_name,
		email,
		password
	) 
	SELECT 'Bruno Moreno',
		'brunomorello7@gmail.com',
		'123'
	WHERE NOT EXISTS (
		SELECT *
		FROM users
		WHERE email = 'brunomorello7@gmail.com'
	)
`;

const BOOKS_SCHEMA = `
	CREATE TABLE IF NOT EXISTS books (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		title TEXT NOT NULL,
		price REAL NOT NULL,
		description TEXT DEFAULT(NULL)
	)
`;

const INSERT_BOOK_1 = `
	INSERT INTO books(
		title,
		price,
		description
	)
	SELECT 'Node Fundamentals',
		30.0,
		'How to create node apps'
	WHERE NOT EXISTS (
		SELECT *
		FROM books WHERE title = 'Node Fundamentals'
	)
`;

const INSERT_BOOK_2 = `
	INSERT INTO books(
		title,
		price,
		description
	)
	SELECT 'JavaScript Fundamentals',
		50.0,
		'How to create node apps'
	WHERE NOT EXISTS (
		SELECT *
		FROM books WHERE title = 'JavaScript Fundamentals'
	)
`;

db.serialize(() => {

	db.run('PRAGMA foreign_keys=ON');
	db.run(USERS_SCHEMA);
	db.run(INSERT_USER_1);
	db.run(BOOKS_SCHEMA);
	db.run(INSERT_BOOK_1);
	db.run(INSERT_BOOK_2);

	db.each("SELECT * FROM users", (err, user) => {
		console.log(`User: ${user.full_name}`);
	});
});

process.on('SIGINT', () => {
	db.close(() => {
		console.log('DB closed!');
		process.exit(0);
	})
});

module.exports = db;