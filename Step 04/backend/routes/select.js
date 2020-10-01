var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let mysql = require('mysql');
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jobboard'
  });

  connection.connect();

  connection.query('SELECT * FROM advertisements', (err, rows, fields) => {
    if (err) {
      throw err;
    }

    console.log(row);
    console.log(fields);
  });
});

module.exports = router;
