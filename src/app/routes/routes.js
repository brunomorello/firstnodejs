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

		res.send(`
			<html>
				<head>
					<meta charset="UTF-8">
					<title>Books</title>
				</head>
				<body>
					<h1>Listing Books</h1>
				</body>
			</html>
		`);

	});
	
}
