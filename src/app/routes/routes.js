const BookDao = require('../infra/dao/book-dao');
const db = require('../../config/database');

module.exports = (app) => {

	app.get('/', (req, res) => {

		res.send(`
			<html>
				<head>
					<meta charset="UTF-8">
					<title>Hello World</title>
				</head>
				<body>
					<h1>Hello World</h1>
				</body>
			</html>
		`);
	});

	app.get('/books', (req, res) => {

		let bookDao = new BookDao(db);
		bookDao.list()
				.then(booksResp => res.marko(
					require('../views/books/list/list.marko'),
					{
						books: booksResp
					}
				))
				.catch(error => console.log(`Error to get data from database ${error}`));

	});

	app.get('/books/form', (req, res) => {

		res.marko(
			require('../views/books/form/form.marko')
		);

	});

	app.post('/books', (req, res) => {
		console.log(req.body);
	});
	
}
