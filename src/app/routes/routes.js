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

		// get all records from sqlite3
		db.all('SELECT * FROM books', (error, resp) => {

			if(error) console.log(`Error to retrieve data from database: ${error}`);

			res.marko(
				require('../views/books/list/list.marko'),
				{
					books: resp
				}
			);

		})

	});
	
}
