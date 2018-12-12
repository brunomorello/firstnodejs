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

		res.marko(

			require('../views/books/list/list.marko'),
			{
				books: [
					{
						id: 1,
						title: 'Node Fundamentals'
					},

					{
						id: 2,
						title: 'Node Advanced'
					}
				]
			}

		);

	});
	
}
