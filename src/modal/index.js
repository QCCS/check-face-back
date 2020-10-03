// get the client
const mysql = require('mysql2');
// https://www.npmjs.com/package/mysql2
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "mac123",
  database: 'check_face'
});

module.exports = connection
// // simple query
// connection.query(
//   'SELECT * FROM `img`',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     // console.log(fields); // fields contains extra meta data about results, if available
//   }
// );


