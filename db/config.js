// Write your database config in this file!
const options = {
    query: (e) => {
        console.log('QUERY:', e.query);
    }
};
const pgp = require('pg-promise')(options);

function setDatabase() {
    //
    // If the Node environment is development or if the environment is not defined,
    // return a new database object.
    //
    if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
        return pgp({
            database: 'pizza_kestrel_dev',
            port: 5432,
            host: 'localhost'
        });
    } else {
        if (process.env.NODE_ENV === 'production') {
            return pgp(process.env.DATABASE_URL);
        }
    }
}

const db = setDatabase();


// exports the db
module.exports = db;
