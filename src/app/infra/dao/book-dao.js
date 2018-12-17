class BookDao {

	constructor(db) {
		this._db = db;
	}

	list() {

		// Returning a Promise with data retrieved
		return new Promise((resolve, reject) => {

			// Calling database and running a querie
			this._db.all(
				'SELECT * FROM books',
				(error, response) => {
					if(error) return reject(`Error to get data from database ${error}`);

					return resolve(response);
				}
			)
		});
	}
}

module.exports = BookDao;