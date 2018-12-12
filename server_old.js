const http = require('http');

const server = http.createServer((req, res) => {

	let html = '';

	if(req.url == '/') {

		html = `
			<html>
				<head>
					<meta charset="UTF-8">
					<title>Hello World</title>
				</head>
				<body>
					<h1>Hello World</h1>
				</body>
			</html>
		`;	

	}

	res.end(html);
	
});
server.listen(3000);